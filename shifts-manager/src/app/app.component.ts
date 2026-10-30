import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    imports: [RouterOutlet],
    selector: 'smg-root',
    changeDetection: ChangeDetectionStrategy.Eager,
    template: '<router-outlet />'
})
export class AppComponent { }
