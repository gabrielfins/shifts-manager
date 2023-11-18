package br.com.gabriel.shiftsmanagerapi.repositories;


import br.com.gabriel.shiftsmanagerapi.models.Hospital;
import br.com.gabriel.shiftsmanagerapi.models.Proposta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PropostaRepository extends JpaRepository<Proposta, Long> {
    List<Proposta> findByEspecialidade(int especialidade);
}
