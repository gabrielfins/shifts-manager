package br.com.gabriel.shiftsmanagerapi.models;

import jakarta.persistence.*;

@Entity
@Table(name = "propostas")
public class Proposta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "hospital")
    private Hospital hospital;

    @ManyToOne
    @JoinColumn(name = "medico")
    private Medico medico;

    private String dataInicio;

    private String horaInicio;

    private String dataFim;

    private String horaFim;

    private int duracao;

    private int especialidade;

    private float valorPlantao;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Hospital getHospital() {
        return hospital;
    }

    public void setHospital(Hospital hospital) {
        this.hospital = hospital;
    }

    public Medico getMedico() {
        return medico;
    }

    public void setMedico(Medico medico) {
        this.medico = medico;
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

    public int getDuracao() {
        return duracao;
    }

    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }

    public int getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(int especialidade) {
        this.especialidade = especialidade;
    }

    public float getValorPlantao() {
        return valorPlantao;
    }

    public void setValorPlantao(float valorPlantao) {
        this.valorPlantao = valorPlantao;
    }

    public String getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(String horaInicio) {
        this.horaInicio = horaInicio;
    }

    public String getHoraFim() {
        return horaFim;
    }

    public void setHoraFim(String horaFim) {
        this.horaFim = horaFim;
    }
}
