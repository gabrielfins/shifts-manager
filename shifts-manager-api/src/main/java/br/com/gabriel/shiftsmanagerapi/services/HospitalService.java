package br.com.gabriel.shiftsmanagerapi.services;

import br.com.gabriel.shiftsmanagerapi.dto.LoginDTO;
import br.com.gabriel.shiftsmanagerapi.models.Hospital;
import br.com.gabriel.shiftsmanagerapi.repositories.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HospitalService {
    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Hospital> getAll() {
        return this.hospitalRepository.findAll();
    }

    public Optional<Hospital> getById(long id) {
        return this.hospitalRepository.findById(id);
    }

    public Optional<Hospital> getByEmail(String email) {
        return this.hospitalRepository.findByEmail(email);
    }

    public void save(Hospital hospital) {
        hospital.setSenha(passwordEncoder.encode(hospital.getSenha()));
        this.hospitalRepository.save(hospital);
    }

    public Optional<Hospital> update(Hospital hospital) {
        if (this.getById(hospital.getId()).isPresent()) {
            hospital.setSenha(passwordEncoder.encode(hospital.getSenha()));
            return Optional.of(this.hospitalRepository.save(hospital));
        } else {
            return Optional.empty();
        }
    }

    public void delete(long id) {
        this.hospitalRepository.deleteById(id);
    }

    public boolean login(LoginDTO loginDTO) {
        Optional<Hospital> hospital =  this.hospitalRepository.findByEmail(loginDTO.getEmail());
        if (hospital.isEmpty()) {
            return false;
        }

        return passwordEncoder.matches(loginDTO.getSenha(), hospital.get().getSenha());
    }
}
