import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      // 레이지 로딩만 사용할 경우에는 아래 설정은 필요 없다.
      { path: 'lazy-load', component: LazyLoadComponent },
    ])
  ],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule {
  constructor(){
    console.log('LazyLoadRoutingModule # constructor() called.');
  }
}
