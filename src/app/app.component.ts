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
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule, 
    HeaderComponent,
],
  templateUrl: './app.component.html', // ✅ using external HTML
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Earl Lamier';
  //cardMessage = '/Projects';  // <app-card [message]="cardMessage"></app-card>
  


}

