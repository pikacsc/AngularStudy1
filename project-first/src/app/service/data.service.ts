import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  str: string = '초기값'; //직접 접근할 수 있으나, 데이터 가공의 경우를 위해서 getter setter 메소드로 접근해줌

  constructor() {
    console.log('DataService # constructor() called.')
  }

  getData(): string {
    return this.str; //JS 컴파일러는 this. 생략법을 하지 않으므로 꼭 명시해줘야됨
  }

  setData(str: string): void{
    this.str = str;
  }



}
