package br.com.gabriel.shiftsmanagerapi.controllers;

import br.com.gabriel.shiftsmanagerapi.models.Proposta;
import br.com.gabriel.shiftsmanagerapi.services.PropostaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/propostas")
public class PropostaController {
    @Autowired
    private PropostaService propostaService;

    @GetMapping
    public ResponseEntity<List<Proposta>> getAll() {
        return ResponseEntity.ok(this.propostaService.getAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Proposta> getById(@PathVariable long id) {
        Optional<Proposta> proposta = this.propostaService.getById(id);
        if (proposta.isPresent()) {
            return ResponseEntity.ok(proposta.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = "/especialidade/{especialidade}")
    public ResponseEntity<List<Proposta>> getByEspecialidade(@PathVariable int especialidade) {
        return ResponseEntity.ok(this.propostaService.getByEspecialidade(especialidade));
    }

    @PostMapping
    public ResponseEntity<Boolean> save(@RequestBody Proposta proposta) {
        this.propostaService.save(proposta);
        return ResponseEntity.ok(true);
    }

    @PutMapping
    public ResponseEntity<Boolean> update(@RequestBody Proposta proposta) {
        Optional<Proposta> updatedProposta = this.propostaService.update(proposta);
        if (updatedProposta.isPresent()) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable long id) {
        this.propostaService.delete(id);
        return ResponseEntity.ok(true);
    }
}
