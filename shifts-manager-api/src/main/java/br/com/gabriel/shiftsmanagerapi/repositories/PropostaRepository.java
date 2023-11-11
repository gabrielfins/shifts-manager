package br.com.gabriel.shiftsmanagerapi.repositories;


import br.com.gabriel.shiftsmanagerapi.models.Medico;
import br.com.gabriel.shiftsmanagerapi.models.Proposta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface PropostaRepository extends JpaRepository<Proposta, Long> {
}
