import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Directive, Input, ViewChild } from '@angular/core';

@Directive({
  selector: 'item'
})
export class Item {
  @Input() status: boolean;
}

@Component({
  selector: 'item-component',
  template: `<button>알림창</button>`
})
export class ItemComponent {
  @Input() key;

  display(str: string) {
    alert('ItemComponent # display() : str = ' + str);
    setTimeout(() => { this.key('점심시간! 예~~~') }, 0);
  }
}

@Component({
  selector: 'app-view-child',
  // templateUrl: './view-child.component.html',
  template: `
 <item status="true" *ngIf="isShow==true"></item>
 <item status="false" *ngIf="isShow==false"></item>
 <button (click)="toggle()">toggle</button><br>
 isShow : {{isShow}}<br>
 status : {{status}}<br>
 <fieldset>
 <item-component (click)="display()" [key]="x"></item-component>
 </fieldset>`,
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  x(data){
    alert(data);
  }

  status: boolean;

  // 처음 실행할 때 isShow: boolean = true; 이므로
  // <item status="true" *ngIf="isShow==true"></item> 가 선택된다.
  // 따라서 item 디렉티브의 status 값은 true 로 초기에 설정된다.
  // 토글 함수가 호출되면 isShow 값이 반전된다.
  isShow: boolean = true;

  // @ViewChild 자식 컴포넌트, 디렉티브, 엘리먼트의 참조를 획득하는 수단이다
  // @ViewChild(접근할 컴포넌트의 클래스명)
  // @ViewChild 데코레이터를 사용해서 디렉티브인 Item 자원에 접근한다.
  @ViewChild(Item)
  set item(d: Item) {
    console.log('@ViewChild(Item) set item(item: Item) called.');
    // 디렉티브의 객체는 화면이 초기화되고 나서야 접근할 수 있기 때문에
    // setTimeout 함수를 사용하여 코드수행을 늦춘다.
    setTimeout(() => { this.status = d.status; }, 0);
  }

  @ViewChild(ItemComponent) itemComponent: ItemComponent;

  constructor() { }

  ngOnInit() {
    console.log('ViewChildComponent # ngOnInit()');
  }

  toggle() {
    alert('ViewChildComponent # toggle()');
    this.isShow = !this.isShow;
  }

  display() {
    alert('ViewChildComponent # display()');
    this.itemComponent.display('sended message from ViewChildComponent');
  }
}
