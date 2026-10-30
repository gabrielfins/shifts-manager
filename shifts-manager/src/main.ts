import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { headersInterceptor } from './app/interceptors/headers.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideHttpClient(withXhr(), 
      withInterceptors([
        headersInterceptor
      ])
    ),
    provideHotToastConfig({
      position: 'bottom-right',
      duration: 3000,
    })
  ]
});
