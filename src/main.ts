import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { App } from './app/app';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

import { baseUrlInterceptor } from './app/shared/interceptors/base-url-interceptor';
import { errorInterceptor } from './app/shared/interceptors/error.interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor,
        errorInterceptor
      ])
    ),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
