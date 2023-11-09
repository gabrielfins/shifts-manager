import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconComponent } from 'src/app/components/icon/icon.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  templateUrl: './doctor-home-layout.component.html',
  styleUrls: ['./doctor-home-layout.component.scss']
})
export class DoctorHomeLayoutComponent {

}
