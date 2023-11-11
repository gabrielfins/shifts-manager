package br.com.gabriel.shiftsmanagerapi.models;

import jakarta.persistence.*;

@Entity
@Table(name = "propostas")
public class Proposta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    @JoinColumn(name = "idHospital")
    private Hospital idHospital;

    @OneToOne
    @JoinColumn(name = "idMedico")
    private Medico idMedico;

    private String dataInicio;

    private String horaInicio;

    private String dataFim;

    private String horaFim;

    private Number duracao;

    private String especialidade;

    private float valorPlantao;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Hospital getIdHospital() {
        return idHospital;
    }

    public void setIdHospital(Hospital idHospital) {
        this.idHospital = idHospital;
    }

    public Medico getIdMedico() {
        return idMedico;
    }

    public void setIdMedico(Medico idMedico) {
        this.idMedico = idMedico;
    }

    public String getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(String dataInicio) {
        this.dataInicio = dataInicio;
    }

    public String getDataFim() {
        return dataFim;
    }

    public void setDataFim(String dataFim) {
        this.dataFim = dataFim;
    }

    public Number getDuracao() {
        return duracao;
    }

    public void setDuracao(Number duracao) {
        this.duracao = duracao;
    }

    public String getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public float getValorPlantao() {
        return valorPlantao;
    }

    public void setValorPlantao(float valorPlantao) {
        this.valorPlantao = valorPlantao;
    }
}
