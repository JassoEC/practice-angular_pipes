import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class CustomUpperCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = true): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
