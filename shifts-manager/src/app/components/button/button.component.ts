import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: '[smg-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  @HostBinding('class')
  variant: 'filled' | 'tonal' = 'filled';
}
