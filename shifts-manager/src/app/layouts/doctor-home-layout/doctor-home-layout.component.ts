import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    IconComponent
  ],
  templateUrl: './doctor-home-layout.component.html',
  styleUrls: ['./doctor-home-layout.component.scss']
})
export class DoctorHomeLayoutComponent {
  readonly doctorService = inject(DoctorService);
}
