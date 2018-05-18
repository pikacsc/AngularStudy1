import { Component, OnInit } from '@angular/core';
import { CounterBridgeService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
  count = 0;

  constructor(private counterBridgeService: CounterBridgeService) { }

  ngOnInit() {
    //서비스로부터 옵저버블 객체를 얻는다.
    // 옵저버블객체.구독함수(콜백함수) 형태로 선언한다
    // 나중에 다른 컴포넌트에서 이벤트가 발생되면
    // 다른 컴포넌트는 서비스의 함수를 호출하고 서비스는 그 때,
    // 콜백함수를 호출 합니다.
    this.counterBridgeService.getObservable().subscribe(
      // 서비스에서 this.subject.next({ type: 'incremnet' });
      // 코드를 사용할 때 { type: 'incremnet'} 객체가
      // message 파라미터 변수에 할당된다.
      message => {
        if (message.type === 'incremnet') {
          this.count++;
        } else {
          this.count--;
        }
      }
    );
  }

}
