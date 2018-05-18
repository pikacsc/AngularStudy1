import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpper'
})
export class MyUpperPipe implements PipeTransform {

  transform(value: string): any {
    return value.toUpperCase();
  }
}
