import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true, // latest Angular version
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css'],
  imports: [CommonModule] // Import CommonModule for ngFor and other directives
})
export class TechStackComponent {
  techStack = [
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python', level: 85 }, // Expert
    { name: 'Angular', icon: 'https://skillicons.dev/icons?i=angular', level: 70 }, // Advanced
    { name: 'C#', icon: 'https://skillicons.dev/icons?i=cs', level: 65 }, // Advanced
    { name: '.NET', icon: 'https://skillicons.dev/icons?i=dotnet', level: 65 }, // Advanced
    { name: 'SQL', icon: 'https://skillicons.dev/icons?i=postgresql', level: 70 }, // Intermediate
    { name: 'Python Anaconda', icon: 'https://skillicons.dev/icons?i=python', level: 80 }, // Intermediate
    { name: 'Azure', icon: 'https://skillicons.dev/icons?i=azure', level: 60 } // Beginner
  ];
}