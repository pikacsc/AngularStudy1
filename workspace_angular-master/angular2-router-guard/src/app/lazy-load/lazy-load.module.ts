import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule }   from './lazy-load-routing.module';

import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ],
  declarations: [LazyLoadComponent]
})
export class LazyLoadModule {
  constructor(){
    console.log('LazyLoadModule # constructor() called.');
  }
}
