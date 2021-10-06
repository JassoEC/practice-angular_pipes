import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  lowerName: string = 'emanuel';
  upperName: string = 'EMANUEL';
  fullName: string = 'EmaNUel CampoS';
  currentDate: Date = new Date();
}
