import {
  Component, Input,
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent
// implements OnChanges, OnInit, DoCheck,
// AfterContentInit, AfterContentChecked,
// AfterViewInit, AfterViewChecked, OnDestroy
{
  title = 'ParentComponent';
  shouldShow = true;

  constructor() {
    console.log('1.ParentComponent # constructor() called.')
  }

//외부에서 파라미터를 전달 했을 때만 기동한다.
  // ngOnChanges(changes) {
  //     console.log('ParentComponent # constructor() called.')
  // }
  //
  // ngOnInit() {
  //   // 컴포넌트와 지시자가 초기화되기 전 호출된다.
  //   console.log("2.ParentComponent #  init 1 : ngOnInit");
  // }
  //
  // ngDoCheck() {
  //   // 상태가 변할 때마다 직전에 호출된다.
  //   console.log("3.ParentComponent #  status 1 : ngDoCheck");
  // }
  //
  // ngAfterContentInit() {
  //   // 컴포넌트와 지시자가 초기화된 후 호출된다.
  //   console.log("4.ParentComponent #  init 2 : ngAfterContentInit");
  // }
  //
  // ngAfterContentChecked() {
  //   // 상태가 변할 때마다 바인딩이 체크된 후에 호출된다.
  //   console.log("5.ParentComponent #  status 2 : ngAfterContentChecked");
  // }
  //
  // ngAfterViewInit() {
  //   // 자신의 뷰와 자식의 뷰가 모두 초기화된 후 호출된다.
  //   console.log("6.ParentComponent #  init 3 : ngAfterViewInit");
  // }
  //
  // ngAfterViewChecked() {
  //   // 상태가 변할 때마다 콘텐츠가 표시된 후 호출된다.
  //   console.log("7.ParentComponent #  status 3 : ngAfterViewChecked");
  // }
  //
  // ngOnDestroy() {
  //   // 컴포넌트나 디렉티브가 제거되기 전에 호출된다.
  //   // 리소스 반환, 컴포넌트 소멸 전에 수행해야 하는 로직을 주로 배치한다.
  //   console.log("8.ParentComponent #  event 2 : ngOnDestroy");
  // }
  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
