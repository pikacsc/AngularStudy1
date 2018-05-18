import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherRoutingModule }   from './another-routing.module';

import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';

@NgModule({
  imports: [
    CommonModule,
    AnotherRoutingModule
  ],
  declarations: [Child4Component, Child5Component]
})
export class AnotherModule { }
