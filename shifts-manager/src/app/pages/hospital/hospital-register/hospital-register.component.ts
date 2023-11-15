import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { NgxMaskDirective } from 'ngx-mask';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
    IconButtonComponent,
    NgxMaskDirective
  ],
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.scss']
})
export class HospitalRegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly hospitalService = inject(HospitalService);
  private readonly toast = inject(HotToastService);

  registerForm = this.fb.nonNullable.group({
    razaoSocial: ['', Validators.required],
    nomeFantasia: ['', Validators.required],
    cnpj: ['', Validators.required],
    senha: ['', Validators.required],
    cep: ['', Validators.required],
    estado: ['', Validators.required],
    cidade: ['', Validators.required],
    bairro: ['', Validators.required],
    endereco: ['', Validators.required],
    numero: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit() {
    const value = this.registerForm.getRawValue();
    this.hospitalService.post(value).subscribe({
      next: () => {
        this.toast.success('Cadastro realizado com sucesso!');
        this.router.navigate(['/hospital/login']);
      },
      error: () => {
        this.toast.error('Não foi possível realizar o cadastro. Verifique os dados e tente novamente.');
      }
    });
  }
}
