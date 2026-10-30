
import { Component, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    imports: [],
    selector: 'smg-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
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
