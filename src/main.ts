/* import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); */

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes';
import { withInMemoryScrolling } from '@angular/router';  // Import the in-memory scrolling config

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes, // Define your routes
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Enables scroll position restoration
        anchorScrolling: 'enabled'           // Enables anchor scrolling for fragments
      })
    ),
  ],
}).catch((err) => console.error(err));
  
  
  