import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'smg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    class: 'material-symbols-outlined',
  }
})
export class IconComponent {
  @Input({ required: true }) icon = '';

  @HostBinding('style.font-size.px')
  @Input()
  size = 24;
}
