/**
 * @file Portfolio
 * @description This file contains the main component of the Angular application.
 * @version 1.0.0
 * @date February 28, 2025
 * @author Earl Lamier
 * 
 * 
 * Project: Angular Web Project
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconGridComponent } from './icon-grid/icon-grid.component';
import { CardComponent } from './card/card.component';
import { MainContentComponent } from "./main-content/main-content.component";

@Component({
  standalone: true, // latest Angular version
  selector: 'app-root',
  imports: [RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    IconGridComponent, 
    CardComponent, 
    MainContentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected property name
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'Earl Lamier';
  cardMessage = 'Empowering Communities';
}
