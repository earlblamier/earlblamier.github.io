import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component'; // Your existing component

export const routes: Routes = [
  { path: '', component: MainContentComponent },  // Default route
  { path: '**', redirectTo: '' }  // Wildcard route for undefined paths
];
