import { CommonModule } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
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
        RouterLink,
        NgxMaskPipe,
    ],
    templateUrl: './hospital-dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./hospital-dashboard.component.scss']
})
export class HospitalDashboardComponent {
  private readonly propositionService = inject(PropositionService);
  private readonly hospitalService = inject(HospitalService);

  propositions$ = new Observable<Proposta[]>();

  ngOnInit() {
    const hospitalId = this.hospitalService.hospital?.id;

    if (!hospitalId) {
      return;
    }

    this.propositions$ = this.propositionService.getAll().pipe(
      map(propositions => propositions.filter(proposition => proposition.hospital?.id === hospitalId && proposition.medico === null))
    );
  }

  deleteProposition(id: number) {
    const hospitalId = this.hospitalService.hospital?.id;

    if (!hospitalId) {
      return;
    }

    this.propositionService.delete(id).subscribe(() => {
      this.propositions$ = this.propositionService.getAll().pipe(
        map(propositions => propositions.filter(proposition => proposition.hospital?.id === hospitalId && proposition.medico === null))
      );
    });
  }
}
