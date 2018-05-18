import { Component, OnInit, Input, Output, EventEmitter }
  from '@angular/core';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {
  @Input() path = "./assets/image/img001.jpg";
  @Input() title = "제목";
  @Input() width = "100";
  @Input() height = "150";

  @Output() selectBook = new EventEmitter<string>();
                        //node의 EventEmitter와는 조금 다름
  constructor() { }

  ngOnInit() {
  }

  onClick(name: string) {
    this.selectBook.emit(name);
    // 자식 컴포넌트가 부모 컴포넌트 에게 파라미터를 전달한다.
    // 이벤트 Emitter 객체인 변수명 selectBook 을 키로 사용하고
    // name 변수의 값을 전달한다.
  }
}
