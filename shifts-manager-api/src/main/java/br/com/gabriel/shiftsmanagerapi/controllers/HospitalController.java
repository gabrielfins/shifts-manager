package br.com.gabriel.shiftsmanagerapi.controllers;

import br.com.gabriel.shiftsmanagerapi.dto.LoginDTO;
import br.com.gabriel.shiftsmanagerapi.models.Hospital;
import br.com.gabriel.shiftsmanagerapi.repositories.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/hospitais")
public class HospitalController {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public ResponseEntity<List<Hospital>> getAll() {
        return ResponseEntity.ok(this.hospitalRepository.findAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Hospital> getById(@PathVariable long id) {
        Optional<Hospital> hospital= this.hospitalRepository.findById(id);
        if (hospital.isPresent()) {
            return ResponseEntity.ok(hospital.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Hospital> save(@RequestBody Hospital hospital) {
        return ResponseEntity.ok(this.hospitalRepository.save(hospital));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginDTO loginDTO) {
        Optional<Hospital> hospital =  this.hospitalRepository.findByEmail(loginDTO.getEmail());
        if (hospital.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(passwordEncoder.matches(loginDTO.getSenha(), hospital.get().getSenha()));
    }

    @PutMapping
    public ResponseEntity<Hospital> update(@RequestBody Hospital hospital) {
        if (this.hospitalRepository.findById(hospital.getId()).isPresent()) {
            hospital.setSenha(passwordEncoder.encode(hospital.getSenha()));
            return ResponseEntity.ok(this.hospitalRepository.save(hospital));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> delete(@PathVariable long id) {
        this.hospitalRepository.deleteById(id);
        return ResponseEntity.ok("Usuário removido com sucesso.");
    }
}
