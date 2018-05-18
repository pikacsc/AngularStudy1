import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyUpperPipe } from './my-upper.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MyUpperPipe,
    HighlightDirective,
    CommonModule,
    FormsModule
  ],
  declarations: [MyUpperPipe, HighlightDirective]
})
export class ShareModule {
  constructor() {
    console.log('ShareModule # constructor() called.');
  }
}
