package br.com.gabriel.shiftsmanagerapi.repositories;

import br.com.gabriel.shiftsmanagerapi.models.Hospital;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HospitalRepository extends JpaRepository<Hospital, Long>{
    Optional<Hospital> findByEmail(String email);
}

