import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {
  // {{str | myDate:'/'}} 에서
  // str : 첫 번째 파라미터
  // '/' : 두 번째 파라미터
  transform(value: any, exponent?: any): any {
    if (!exponent) {
      exponent = '-';
    }
    // 20170911 ===> 2017-09-11
    if (value.length == 8) {
      return value.substring(0, 4) + exponent +
        value.substring(4, 6) + exponent +
        value.substring(6, 8);
    } else {
      return value;
    }
  }

}
