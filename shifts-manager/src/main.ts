import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { headersInterceptor } from './app/interceptors/headers.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideHttpClient(
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
