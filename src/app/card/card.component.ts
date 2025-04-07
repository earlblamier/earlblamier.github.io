import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'], // Corrected property name
  encapsulation: ViewEncapsulation.None // Optional: use if you want to disable view encapsulation
})
export class CardComponent {
  @Input() message!: string; // receives data from parent component app
}