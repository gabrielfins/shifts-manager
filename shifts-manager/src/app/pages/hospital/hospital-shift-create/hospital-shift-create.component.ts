import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { NgxMaskDirective } from 'ngx-mask';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { HospitalService } from 'src/app/services/hospital.service';
import { PropositionService } from 'src/app/services/proposition.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonComponent,
    IconComponent,
    IconButtonComponent,
    NgxMaskDirective
  ],
  templateUrl: './hospital-shift-create.component.html',
  styleUrls: ['./hospital-shift-create.component.scss'],
})
export class HospitalShiftCreateComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly hospitalService = inject(HospitalService);
  private readonly propositionService = inject(PropositionService);
  private readonly toast = inject(HotToastService);
  
  shiftForm = this.fb.nonNullable.group({
    dataInicio: ['', [Validators.required]],
    horaInicio: ['', [Validators.required]],
    duracao: [0, [Validators.required]],
    dataFim: ['', [Validators.required]],
    horaFim: ['', [Validators.required]],
    especialidade: [0, [Validators.required]],
    valorPlantao: [0, [Validators.required]],
  });

  onSubmit() {
    const value = this.shiftForm.getRawValue();
    const hospital = this.hospitalService.hospital;

    if (!hospital) {
      return;
    }

    this.propositionService.create({...value, hospital }).subscribe({
      next: () => {
        this.toast.success('Proposta criada com sucesso!');
        this.router.navigate(['/hospital/dashboard']);
      },
      error: () => {
        this.toast.error('Não foi possível criar a proposta.');
      }
    });
  }
}
