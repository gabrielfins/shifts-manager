import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { NgxMaskDirective } from 'ngx-mask';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';
import { DoctorService } from 'src/app/services/doctor.service';

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
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly doctorService = inject(DoctorService);
  private readonly toast = inject(HotToastService);

  registerForm = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    senha: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    crm: ['', Validators.required],
    especialidade: [0, Validators.required],
    telefone: ['', Validators.required],
    celular: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit() {
    const value = this.registerForm.getRawValue();
    this.doctorService.post(value).subscribe({
      next: () => {
        this.toast.success('Cadastro realizado com sucesso!');
        this.router.navigate(['/doctor/login']);
      },
      error: () => {
        this.toast.error('Não foi possível realizar o cadastro. Verifique os dados e tente novamente.');
      }
    });
  }
}
