import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { Observable, map } from 'rxjs';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { Proposta } from 'src/app/models/proposta.model';
import { DoctorService } from 'src/app/services/doctor.service';
import { PropositionService } from 'src/app/services/proposition.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    NgxMaskDirective,
    NgxMaskPipe,
    ButtonComponent
  ],
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent {
  private readonly propositionService = inject(PropositionService);
  private readonly doctorService = inject(DoctorService);

  propositions$ = new Observable<Proposta[]>();

  ngOnInit() {
    const specialty = this.doctorService.doctor?.especialidade;

    if (specialty === null || specialty === undefined) {
      return;
    }

    this.propositions$ = this.propositionService.getBySpecialty(specialty).pipe(
      map(propositions => propositions.filter(proposition => proposition.medico === null))
    );
  }

  getSpecialtyName(id: number) {
    switch (id) {
      case 0:
        return 'Cardiologia';
      case 1:
        return 'Dermatologista';
      case 2:
        return 'Neurologista';
      case 3:
        return 'Oncologista';
      default:
        return 'Especialidade não encontrada';
    }
  }

  acceptProposition(proposition: Proposta) {
    const medico = this.doctorService.doctor;

    if (!medico) {
      return;
    }

    this.propositionService.update({ ...proposition, medico }).subscribe(() => {
      this.propositions$ = this.propositionService.getBySpecialty(medico.especialidade).pipe(
        map(propositions => propositions.filter(proposition => proposition.medico === null))
      );
    });
  }
}
