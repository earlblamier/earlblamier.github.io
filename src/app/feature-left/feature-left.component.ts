import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature-left',
  standalone: true, // latest Angular version
  templateUrl: './feature-left.component.html',
  styleUrl: './feature-left.component.css',
  encapsulation: ViewEncapsulation.None // This is the default value, but it's good to be explicit
})
export class FeatureLeftComponent {

}
