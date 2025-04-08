import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FeatureLeftComponent } from '../feature-left/feature-left.component';
import { IconGridComponent } from '../icon-grid/icon-grid.component';
import { MapComponent } from '../map/map.component';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MainContentComponent } from "../main-content/main-content.component";
import { PartnersComponent } from '../partners/partners.component';
import { TestComponent } from '../test/test.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    FooterComponent,
    AboutComponent,
    TechStackComponent,
    ProjectsComponent,
    FeatureLeftComponent,
    IconGridComponent,
    MapComponent,
    ContactComponent,
    MainContentComponent,
    PartnersComponent,
    TestComponent
],
})
export class HomeComponent {
  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showBackToTop = scrollTop > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}