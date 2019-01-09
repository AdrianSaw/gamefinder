import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalize'
})
export class CapitalizePipe implements PipeTransform {
  constructor() { }
  transform(value: string) {
    if (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
}
