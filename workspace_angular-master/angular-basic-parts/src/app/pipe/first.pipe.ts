import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    var first = value.charAt(0).toUpperCase();
    return first + value.substr(1);
  }

}
