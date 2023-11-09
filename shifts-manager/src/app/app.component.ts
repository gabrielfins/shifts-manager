import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'smg-root',
  template: '<router-outlet />',
})
export class AppComponent { }
