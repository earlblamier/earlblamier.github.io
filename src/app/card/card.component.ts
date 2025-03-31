import { Component, Input } from '@angular/core';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'] // Corrected property name
})
export class CardComponent {
  @Input() message!: string; // receives data from parent component app
}