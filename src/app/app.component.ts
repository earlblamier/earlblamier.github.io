/**
 * @file Portfolio
 * @description This file contains the main component of the Angular application.
 * @version 1.0.0
 * @date April 4, 2025
 * @author Earl Lamier
 * 
 * Project: Angular Web Project
 */

import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule, 
    HeaderComponent,
],
  templateUrl: './app.component.html', //  using external HTML
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Earl Lamier';
  //cardMessage = '/Projects';  // <app-card [message]="cardMessage"></app-card>
  
  private cursor!: HTMLElement;

  constructor() {}

  ngOnInit(): void {
    // Create the custom cursor element
    this.cursor = document.createElement('div');
    this.cursor.classList.add('cursor');
    document.body.appendChild(this.cursor);

    // Update cursor position on mousemove
    document.addEventListener('mousemove', this.updateCursorPosition);
  }

  ngOnDestroy(): void {
    // Cleanup the event listener when the component is destroyed
    document.removeEventListener('mousemove', this.updateCursorPosition);
    document.body.removeChild(this.cursor);
  }

  private updateCursorPosition = (e: MouseEvent): void => {
    if (this.cursor) {
      this.cursor.style.left = `${e.pageX}px`;
      this.cursor.style.top = `${e.pageY}px`;
    }
  }

}

