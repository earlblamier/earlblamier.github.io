import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component'; // Your existing component
import { AboutComponent } from './about/about.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent, pathMatch: 'full' }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'stack', component: TechStackComponent },
  { path: 'projects', component: CardComponent },
  { path: 'contact', component: FooterComponent },
  { path: '**', redirectTo: '' } // Wildcard route for undefined paths
];