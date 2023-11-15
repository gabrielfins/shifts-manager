package br.com.gabriel.shiftsmanagerapi.controllers;

import br.com.gabriel.shiftsmanagerapi.dto.LoginDTO;
import br.com.gabriel.shiftsmanagerapi.models.Hospital;
import br.com.gabriel.shiftsmanagerapi.models.Medico;
import br.com.gabriel.shiftsmanagerapi.repositories.HospitalRepository;
import br.com.gabriel.shiftsmanagerapi.services.HospitalService;
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
    private HospitalService hospitalService;

    @GetMapping
    public ResponseEntity<List<Hospital>> getAll() {
        return ResponseEntity.ok(this.hospitalService.getAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Hospital> getById(@PathVariable long id) {
        Optional<Hospital> hospital = this.hospitalService.getById(id);
        if (hospital.isPresent()) {
            return ResponseEntity.ok(hospital.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = "email/{email}")
    public ResponseEntity<Hospital> getById(@PathVariable String email) {
        Optional<Hospital> hospital= this.hospitalService.getByEmail(email);
        if (hospital.isPresent()) {
            return ResponseEntity.ok(hospital.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Boolean> save(@RequestBody Hospital hospital) {
        this.hospitalService.save(hospital);
        return ResponseEntity.ok(true);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginDTO loginDTO) {
        boolean loginSuccessful = this.hospitalService.login(loginDTO);
        if (loginSuccessful) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<Boolean> update(@RequestBody Hospital hospital) {
        Optional<Hospital> updatedHospital = this.hospitalService.update(hospital);
        if (updatedHospital.isPresent()) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> delete(@PathVariable long id) {
        this.hospitalService.delete(id);
        return ResponseEntity.ok("Usuário removido com sucesso.");
    }
}
