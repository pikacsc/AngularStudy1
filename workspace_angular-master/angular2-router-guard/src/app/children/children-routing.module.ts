import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ChildrenComponent } from './children.component';
import { Child7Component } from './child7/child7.component';
import { Child8Component } from './child8/child8.component';
import { Child9Component } from './child9/child9.component';
import { ChildWrapperComponent } from './child-wrapper/child-wrapper.component';

import { CanActivateChildGuardService } from '../guard/can-activate-child-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'child7', component: Child7Component },
      { path: 'child8', component: Child8Component },
      { path: 'child9', component: Child9Component },
      {
        path: 'wrapper/children', component: ChildrenComponent,
        children: [
          {
            path: '', component: ChildWrapperComponent, // this is wrapper
            children: [
              { path: '', component: Child7Component },
              { path: 'child7', component: Child7Component },
              { path: 'child8', component: Child8Component },
              { path: 'child9', component: Child9Component },
            ]
          },
        ]
      },
      {
        path: 'children', component: ChildrenComponent,
        children: [
          { path: '', component: Child7Component },
          { path: 'child7', component: Child7Component },
          { path: 'child8', component: Child8Component },
          { path: 'child9', component: Child9Component },
        ]
      },
      {
        path: 'guard/children', component: ChildrenComponent,
        children: [
          {
            path: '',
            canActivateChild: [CanActivateChildGuardService],
            children: [
              { path: '', component: Child7Component },
              { path: 'child7', component: Child7Component },
              { path: 'child8', component: Child8Component },
              { path: 'child9', component: Child9Component },
            ]
          },
        ]
      },
    ])
  ],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
