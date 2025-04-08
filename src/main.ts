/* import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); */


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withRouterConfig({
      // scrollPositionRestoration: 'enabled', // Removed invalid property
      // anchorScrolling: 'enabled', // Enables scrolling to fragments
    })),
  ],
}).catch((err) => console.error(err));