import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({   selector: '[myHighlight]' }) export class MyHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }


  //디렉티브가 설정된 엘리먼트에서 해당 이벤트가 발생하면 함수를 기동한다.
  @HostListener('focus')   onFocus() {     this.renderer.setElementStyle(this.el.nativeElement,       'background', 'yellow');   }

  @HostListener('blur')   onBlur() {     this.renderer.setElementStyle(this.el.nativeElement,       'background', 'white');   }

}
