package br.com.gabriel.shiftsmanagerapi.repositories;

import br.com.gabriel.shiftsmanagerapi.models.Medico;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MedicoRepository extends JpaRepository<Medico, Long> {
    Optional<Medico> findByEmail(String email);
}
