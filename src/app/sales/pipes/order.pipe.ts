import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../sales.interfaces';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(value: Hero[], orderBy: keyof Hero = 'name'): Hero[] {
    value = value.sort((a, b) => (a[orderBy] > b[orderBy] ? 1 : -1));

    return value;
  }
}
