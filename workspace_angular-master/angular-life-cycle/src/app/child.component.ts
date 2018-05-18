import {
  Component, Input,
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
  implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'ChildComponent';
  message = '';

  constructor() {
    // 객체 생성 시점에 호출된다.
    // 외부로부터 전달받은 속성을 여기서는 이용할 수 없다.
    // 대신 라이프사이클 함수중에 하나를 이용하자.
    console.log("0. ChildComponent # constructor() called.");
    console.log("this.content = " + this.content); // undefined
  }

  @Input() content;

/*
<app-child [prop]="shouldShow" ...></app-child>
부모 컴포넌트의 설정
prop 이라는 키값을 변수명이나 접근제어 프로퍼티명으로 맞추어 주면
파라미터를 받을 수 있다.
 */
  @Input()
  set prop(name: string) {
    console.log("@Input prop() : name = " + name);
    console.log("@Input content : this.content = " + this.content);
  }

  ngOnChanges(changes) {
    // 외부로부터 상태(파라미터)를 전달받을 때에만 매번 호출된다.
    console.log("1. event 1 : ngOnChanges");
    console.log("this.content = " + this.content); // 출력
    console.log(changes); // {content: SimpleChange, prop: SimpleChange}
    console.log(JSON.stringify(changes));
  }

  ngOnInit() {
    // 컴포넌트와 지시자가 초기화되기 전 호출된다.
    console.log("2. init 1 : ngOnInit");
  }

  ngDoCheck() {
    // 상태가 변할 때마다 직전에 호출된다.
    console.log("3. status 1 : ngDoCheck");
  }

  ngAfterContentInit() {
    // 컴포넌트와 지시자가 초기화된 후 호출된다.
    console.log("4. init 2 : ngAfterContentInit");
  }

  ngAfterContentChecked() {
    // 상태가 변할 때마다 바인딩이 체크된 후에 호출된다.
    console.log("5. status 2 : ngAfterContentChecked");
  }

  ngAfterViewInit() {
    // 자신의 뷰와 자식의 뷰가 모두 초기화된 후 호출된다.
    console.log("6. init 3 : ngAfterViewInit");
  }

  ngAfterViewChecked() {
    // 상태가 변할 때마다 콘텐츠가 표시된 후 호출된다.
    console.log("7. status 3 : ngAfterViewChecked");
  }

  ngOnDestroy() {
    // 컴포넌트나 디렉티브가 제거되기 전에 호출된다.
    // 리소스 반환, 컴포넌트 소멸 전에 수행해야 하는 로직을 주로 배치한다.
    console.log("8. event 2 : ngOnDestroy");
  }
}
