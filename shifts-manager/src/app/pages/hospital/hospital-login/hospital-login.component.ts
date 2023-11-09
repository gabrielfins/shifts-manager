import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, IconButtonComponent, NgxMaskDirective],
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.scss']
})
export class HospitalLoginComponent {

}
