
import { Component, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    imports: [],
    selector: '[smg-button]',
    templateUrl: './button.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  @HostBinding('class')
  variant: 'filled' | 'tonal' = 'filled';

  @Input()
  @HostBinding('class.danger')
  danger = false;
}
