import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'child4', component: Child4Component },
      { path: 'child5', component: Child5Component },
    ])
  ],
  exports: [RouterModule]
})
export class AnotherRoutingModule { }
