import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule }   from './children-routing.module';

import { ChildrenComponent } from './children.component';
import { Child7Component } from './child7/child7.component';
import { Child8Component } from './child8/child8.component';
import { Child9Component } from './child9/child9.component';
import { ChildWrapperComponent } from './child-wrapper/child-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    ChildrenRoutingModule
  ],
  declarations: [ChildrenComponent, Child7Component, Child8Component, Child9Component, ChildWrapperComponent]
})
export class ChildrenModule { }
