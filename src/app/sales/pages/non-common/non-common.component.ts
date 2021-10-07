import { Component } from '@angular/core';

@Component({
  selector: 'app-non-common',
  templateUrl: './non-common.component.html',
  styles: [],
})
export class NonCommonComponent {
  name: string = 'Emanuel';
  gender: string = 'female';

  invitation = {
    male: 'invitarlo',
    female: 'invitarla',
  };
}
