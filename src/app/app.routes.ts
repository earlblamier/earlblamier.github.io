import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component'; // Your existing component
import { AboutComponent } from './about/about.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'home', component: HomeComponent }, // Home route
  { path: 'main', component: MainContentComponent }, //  route
  { path: 'about', component: AboutComponent },
  { path: 'stack', component: TechStackComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Wildcard route for undefined paths
];
