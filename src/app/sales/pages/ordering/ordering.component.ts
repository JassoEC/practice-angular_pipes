import { Component } from '@angular/core';
import { Color, Hero } from '../../sales.interfaces';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styles: [],
})
export class OrderingComponent {
  toggleUpper = false;

  heroes: Hero[] = [
    { name: 'SuperMaan', flying: true, color: Color.red },
    { name: 'Batman', flying: false, color: Color.black },
    { name: 'Linterna', flying: true, color: Color.black },
    { name: 'Aquaman', flying: false, color: Color.black },
    { name: 'Flash', flying: false, color: Color.red },
  ];

  changeToggleUpper() {
    this.toggleUpper = !this.toggleUpper;
  }
}
