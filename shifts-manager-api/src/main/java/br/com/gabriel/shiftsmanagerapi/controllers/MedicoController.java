package br.com.gabriel.shiftsmanagerapi.controllers;

import br.com.gabriel.shiftsmanagerapi.dto.LoginDTO;
import br.com.gabriel.shiftsmanagerapi.models.Medico;
import br.com.gabriel.shiftsmanagerapi.services.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medicos")
public class MedicoController {
    @Autowired
    private MedicoService medicoService;

    @GetMapping
    public ResponseEntity<List<Medico>> getAll() {
        return ResponseEntity.ok(this.medicoService.getAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Medico> getById(@PathVariable long id) {
        Optional<Medico> medico = this.medicoService.getById(id);
        if (medico.isPresent()) {
            return ResponseEntity.ok(medico.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = "/email/{email}")
    public ResponseEntity<Medico> getByEmail(@PathVariable String email) {
        Optional<Medico> medico = this.medicoService.getByEmail(email);
        if (medico.isPresent()) {
            return ResponseEntity.ok(medico.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Boolean> save(@RequestBody Medico medico) {
        this.medicoService.save(medico);
        return ResponseEntity.ok(true);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginDTO loginDTO) {
        boolean loginSuccessful = this.medicoService.login(loginDTO);
        if (loginSuccessful) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<Boolean> update(@RequestBody Medico medico) {
        Optional<Medico> updatedMedico = this.medicoService.update(medico);
        if (updatedMedico.isPresent()) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> delete(@PathVariable long id) {
        this.medicoService.delete(id);
        return ResponseEntity.ok("Usuário removido com sucesso.");
    }
}
