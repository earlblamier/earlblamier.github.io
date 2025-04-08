/**
 * @file Portfolio
 * @description This file contains the main component of the Angular application.
 * @version 1.0.0
 * @date April 4, 2025
 * @author Earl Lamier
 * 
 * Project: Angular Web Project
 */

import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconGridComponent } from './icon-grid/icon-grid.component';
import { CardComponent } from './card/card.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MapComponent } from "./map/map.component";
import { FeatureLeftComponent } from "./feature-left/feature-left.component";
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent, // include header
    HomeComponent,
    IconGridComponent,
    CardComponent,
    CommonModule,
    MapComponent,
    FeatureLeftComponent,
    TechStackComponent,
    AboutComponent,
    ContactComponent
],
  templateUrl: './app.component.html', // ✅ using external HTML
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Earl Lamier';
  cardMessage = 'Projects';
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
}

