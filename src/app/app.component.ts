import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pipes';

  name = 'emanuel campos jasso';

  changeName() {
    console.log(this.name);
  }

  object = {
    name: this.name,
  };
}
