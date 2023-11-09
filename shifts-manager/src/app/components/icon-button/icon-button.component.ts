import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  standalone: true,
  imports: [CommonModule, IconComponent],
  selector: '[smg-icon-button]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input({ required: true }) icon = '';
}
