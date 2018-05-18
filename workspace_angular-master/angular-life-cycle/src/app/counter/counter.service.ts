import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

//Subject - Observable
//Publisher - Subscriber

@Injectable()
export class CounterBridgeService {

  private subject = new Subject<any>();

  constructor() { }

  incremnet() {
    // 파라미터는 구독신청(subscribe)함수에 전달된 콜백함수를 호출하면서
    // 전달된다.
    this.subject.next({ type: 'incremnet' });
  }

  decrement() {
    this.subject.next({ type: 'decrement' });
  }


  //서브젝트 객체로부터 Observable 객체를 얻어다가
  //구독자(CounterDisplayComponent)에게 전달한다.
  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
