package br.com.gabriel.shiftsmanagerapi.dto;

import jakarta.validation.constraints.Email;

public class LoginDTO {
    @Email
    private String email;

    private String senha;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
