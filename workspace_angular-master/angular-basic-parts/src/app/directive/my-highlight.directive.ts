import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class MyHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('focus')
  onFocus() {
    console.log(this.el.nativeElement);

    var span = document.createElement('span');
    span.innerHTML = '*';
    span.className = 'asterisk';

    this.el.nativeElement.parentNode.insertBefore(span, this.el.nativeElement);

    this.renderer.setElementStyle(this.el.nativeElement,
      'background', 'yellow');
  }

  @HostListener('blur')
  onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement,
      'background', 'white');
  }

}
