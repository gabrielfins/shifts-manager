import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, filter, map } from 'rxjs';
import { Proposta } from 'src/app/models/proposta.model';
import { PropositionService } from 'src/app/services/proposition.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    NgxMaskDirective,
    NgxMaskPipe,
    ButtonComponent
  ],
  templateUrl: './doctor-calendar.component.html',
  styleUrls: ['./doctor-calendar.component.scss']
})
export class DoctorCalendarComponent {
  private readonly propositionService = inject(PropositionService);
  private readonly doctorService = inject(DoctorService);

  propositions$ = new Observable<Proposta[]>();

  ngOnInit() {
    const specialty = this.doctorService.doctor?.especialidade;
    const medico = this.doctorService.doctor?.id;

    if (specialty === null || specialty === undefined || medico === null || medico === undefined) {
      return;
    }

    this.propositions$ = this.propositionService.getBySpecialty(specialty).pipe(
      map(propositions => propositions.filter(proposition => proposition.medico?.id === medico))
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

  cancelProposition(proposition: Proposta) {
    const medico = this.doctorService.doctor;

    if (!medico) {
      return;
    }

    this.propositionService.update({ ...proposition, medico: null }).subscribe(() => {
      this.propositions$ = this.propositionService.getBySpecialty(medico.especialidade).pipe(
        map(propositions => propositions.filter(proposition => proposition.medico?.id === medico.id))
      );
    });
  }
}
