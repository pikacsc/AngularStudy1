import { Directive, Input, ElementRef, Renderer, DoCheck } from '@angular/core';

@Directive({
  selector: '[myHidden]'
})
export class MyHiddenDirective implements DoCheck {
  @Input() myHidden: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
    // renderer.setElementStyle(el.nativeElement, 'display', 'none');
  }

  ngDoCheck() {
    if (this.myHidden) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', '');
    }
  }
}
