import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({   selector: '[myHighlight]' }) export class MyHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter')   onFocus() {     this.renderer.setElementStyle(this.el.nativeElement,       'background', 'yellow');   }

  @HostListener('mouseleave')   onBlur() {     this.renderer.setElementStyle(this.el.nativeElement,       'background', 'white');   }

}
