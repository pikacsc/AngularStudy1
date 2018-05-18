import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[myClick]'
})
export class MyClickDirective {
  toggle = false;

  @Output('myClick') clicks = new EventEmitter<boolean>();

  // ElementRef: 디렉티브를 설정한 타겟 엘리먼트를 가리키는 참조
  constructor(el: ElementRef) {
    el.nativeElement.addEventListener('click', (event: Event) => {
      this.toggle = !this.toggle;
      this.clicks.emit(this.toggle ? true : false);
    });
  }

}
