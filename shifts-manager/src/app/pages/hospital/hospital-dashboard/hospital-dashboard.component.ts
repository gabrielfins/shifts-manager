import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent, RouterLink],
  templateUrl: './hospital-dashboard.component.html',
  styleUrls: ['./hospital-dashboard.component.scss']
})
export class HospitalDashboardComponent {

}
