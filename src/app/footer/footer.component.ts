import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None // This is the default value, but it's good to be explicit
})
export class FooterComponent {

}
