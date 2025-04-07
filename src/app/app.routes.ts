import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component'; // Your existing component

export const routes: Routes = [
  { path: '', component: MainContentComponent, pathMatch: 'full' }, // Default route with `pathMatch: 'full'`
  { path: '**', redirectTo: '' } // Wildcard route for undefined paths
];