
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
    imports: [IconComponent],
    selector: '[smg-icon-button]',
    templateUrl: './icon-button.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input({ required: true }) icon = '';
}
