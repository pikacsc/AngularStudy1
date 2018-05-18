import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberModule } from '../member/Member.Module';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule,
    MemberModule,
  ],
  declarations: [TitleComponent],
  exports: [TitleComponent],

})
export class CoreModule {

}
