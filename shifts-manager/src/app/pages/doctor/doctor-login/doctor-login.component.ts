import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
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
    IconButtonComponent
  ],
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly doctorService = inject(DoctorService);
  private readonly toast = inject(HotToastService);

  loginForm = this.fb.nonNullable.group({
    email: [''],
    senha: ['']
  });

  onSubmit() {
    const value = this.loginForm.getRawValue();
    this.doctorService.login(value).subscribe({
      next: () => {
        this.doctorService.getByEmail(value.email).subscribe({
          next: (doctor) => {
            this.doctorService.doctor = doctor;
            this.toast.success('Login realizado com sucesso.');
            this.router.navigate(['/doctor']);
          }
        });
      },
      error: () => {
        this.toast.error('Email ou senha incorretos.');
      }
    });
  }
}
