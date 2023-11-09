package br.com.gabriel.shiftsmanagerapi.services;

import br.com.gabriel.shiftsmanagerapi.dto.LoginDTO;
import br.com.gabriel.shiftsmanagerapi.models.Medico;
import br.com.gabriel.shiftsmanagerapi.repositories.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicoService {
    @Autowired
    private MedicoRepository medicoRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Medico> getAll() {
        return this.medicoRepository.findAll();
    }

    public Optional<Medico> getById(long id) {
        return this.medicoRepository.findById(id);
    }

    public Medico save(Medico medico) {
        medico.setSenha(passwordEncoder.encode(medico.getSenha()));
        return this.medicoRepository.save(medico);
    }

    public Optional<Medico> update(Medico medico) {
        if (this.getById(medico.getId()).isPresent()) {
            medico.setSenha(passwordEncoder.encode(medico.getSenha()));
            return Optional.of(this.medicoRepository.save(medico));
        } else {
            return Optional.empty();
        }
    }

    public void delete(long id) {
        this.medicoRepository.deleteById(id);
    }

    public boolean login(LoginDTO loginDTO) {
        Optional<Medico> medico =  this.medicoRepository.findByEmail(loginDTO.getEmail());
        if (medico.isEmpty()) {
            return false;
        }

        return passwordEncoder.matches(loginDTO.getSenha(), medico.get().getSenha());
    }
}
