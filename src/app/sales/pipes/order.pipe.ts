import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../sales.interfaces';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(value: Hero[]): Hero[] {
    value = value.sort((a, b) => (a.name > b.name ? 1 : -1));

    return value;
  }
}
