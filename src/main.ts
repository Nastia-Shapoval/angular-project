import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './app/shared/interceptors/base-url-interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([baseUrlInterceptor])
    ),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
