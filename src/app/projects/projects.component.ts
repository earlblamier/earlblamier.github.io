import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'], // Corrected property name
  encapsulation: ViewEncapsulation.None // Optional: use if you want to disable view encapsulation
})
export class ProjectsComponent {
  //@Input() message!: string; // receives data from parent component app
}