
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
    imports: [
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
],
    templateUrl: './hospital-login.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./hospital-login.component.scss']
})
export class HospitalLoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly hospitalService = inject(HospitalService);
  private readonly toast = inject(HotToastService);

  loginForm = this.fb.nonNullable.group({
    email: [''],
    senha: ['']
  });

  onSubmit() {
    const value = this.loginForm.getRawValue();
    this.hospitalService.login(value).subscribe({
      next: () => {
        this.hospitalService.getByEmail(value.email).subscribe({
          next: (hospital) => {
            this.hospitalService.hospital = hospital;
            this.toast.success('Login realizado com sucesso.');
            this.router.navigate(['/hospital']);
          }
        });
      },
      error: () => {
        this.toast.error('Email ou senha incorretos.');
      }
    });
  }
}
