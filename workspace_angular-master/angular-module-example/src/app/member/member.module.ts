import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MemberRoutingModule } from './member-routing.module';
import { HighlightDirective } from './highlight.directive';
import { MemberListComponent } from './member-list.component';
import { MemberService } from './member.service';
// MemberModule 에 이미 HighlightDirective 가 존재하는데
// ShareModule 에도 같은 이름의 HighlightDirective 가 존재한다.
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MemberRoutingModule,
    ShareModule
  ],
  declarations: [HighlightDirective, MemberListComponent],
  providers: [MemberService]
})
export class MemberModule {
  constructor() {
    console.log('MemberModule # constructor() called.');
  }
}
