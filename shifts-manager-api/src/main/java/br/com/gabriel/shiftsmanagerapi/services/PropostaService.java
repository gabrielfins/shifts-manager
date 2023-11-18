package br.com.gabriel.shiftsmanagerapi.services;

import br.com.gabriel.shiftsmanagerapi.models.Proposta;
import br.com.gabriel.shiftsmanagerapi.repositories.PropostaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropostaService {
    @Autowired
    private PropostaRepository propostaRepository;

    public List<Proposta> getAll() {
        return this.propostaRepository.findAll();
    }

    public Optional<Proposta> getById(long id) {
        return this.propostaRepository.findById(id);
    }

    public void save(Proposta proposta) {
        this.propostaRepository.save(proposta);
    }

    public Optional<Proposta> update(Proposta proposta) {
        if (this.getById(proposta.getId()).isPresent()) {
            return Optional.of(this.propostaRepository.save(proposta));
        } else {
            return Optional.empty();
        }
    }

    public List<Proposta> getByEspecialidade(int especialidade) {
        return this.propostaRepository.findByEspecialidade(especialidade);
    }

    public void delete(long id) {
        this.propostaRepository.deleteById(id);
    }

}
