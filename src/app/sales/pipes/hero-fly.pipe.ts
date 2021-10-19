import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroFly',
})
export class HeroFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Vuela' : ' No vuela';
  }
}
