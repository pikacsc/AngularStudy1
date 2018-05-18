import { Injectable } from '@angular/core';

// 값 제공자에서 사용할 클래스
@Injectable()
export class Config {
  serviceName: string = 'init string';
  grade: string[] = [];
  getInfo() {
  }
}

// 값 제공자에서 사용할 값
let myConfig = {
  serviceName: '회원관리 서비스',
  grade: ['운영자', '정회원', '준회원'],
  getInfo: () => {
    return `<b>${myConfig.serviceName}</b>는 <b>${myConfig.grade}</b> 등급제로 운영합니다.`;
  }
};

let myConfig2 = {
  serviceName: '고객관리 서비스',
  grade: ['일반회원'],
  getInfo: () => {
    return `<b>${myConfig2.serviceName}</b>는 <b>${myConfig2.grade}</b> 등급제로 운영합니다.`;
  }
};

// 값 제공자 설정
export let ValueProvider = {
  provide: Config,
  useValue: myConfig2
};
