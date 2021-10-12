import { Component } from '@angular/core';

@Component({
  selector: 'app-non-common',
  templateUrl: './non-common.component.html',
  styles: [],
})
export class NonCommonComponent {
  name: string = 'Emanuel';
  gender: string = 'male';

  //i18nSelect
  invitation = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  //i18nPlural
  clients: string[] = ['Michelle', 'Emanuel', 'Ana', 'Jose'];

  clientsMap = {
    '=0': 'Sin clientes en espera',
    '=1': 'Un cliente en espera',
    other: 'tenemos # clientes esperando',
  };

  deleteClient = () => {
    this.clients.pop();
  };

  changeClient = () => {
    this.name = 'Michelle';
    this.gender = 'female';
  };

  // Key value pipe

  employee = {
    name: 'Emanuel',
    age: 27,
    address: 'Lago de chapala',
  };

  // Json pipe

  heroes = [
    {
      name: 'Batman',
      fly: true,
    },
    {
      name: 'Aquaman',
      fly: true,
    },
    {
      name: 'Robin',
      fly: true,
    },
  ];
}
