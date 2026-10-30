import { CommonModule } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgxMaskPipe } from 'ngx-mask';
import { Observable, map } from 'rxjs';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { Proposta } from 'src/app/models/proposta.model';
import { HospitalService } from 'src/app/services/hospital.service';
import { PropositionService } from 'src/app/services/proposition.service';

@Component({
    imports: [
        CommonModule,
        ButtonComponent,
        IconComponent,
        NgxMaskPipe,
    ],
    templateUrl: './hospital-calendar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./hospital-calendar.component.scss']
})
export class HospitalCalendarComponent {
  private readonly propositionService = inject(PropositionService);
  private readonly hospitalService = inject(HospitalService);

  propositions$ = new Observable<Proposta[]>();

  ngOnInit() {
    const hospitalId = this.hospitalService.hospital?.id;

    if (!hospitalId) {
      return;
    }

    this.propositions$ = this.propositionService.getAll().pipe(
      map(propositions => propositions.filter(proposition => proposition.hospital?.id === hospitalId && proposition.medico !== null))
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
    const hospitalId = this.hospitalService.hospital?.id;

    if (!hospitalId) {
      return;
    }

    this.propositionService.update({ ...proposition, medico: null }).subscribe(() => {
      this.propositions$ = this.propositionService.getAll().pipe(
        map(propositions => propositions.filter(proposition => proposition.hospital?.id === hospitalId && proposition.medico !== null))
      );
    });
  }
}
