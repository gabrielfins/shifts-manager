
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
    imports: [
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
],
    templateUrl: './doctor-login.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
