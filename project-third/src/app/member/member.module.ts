import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, UserServiceConfig } from './service/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[ UserService ],
  //서비스는 export 해줄 필요 없다
})
export class MemberModule {
  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: MemberModule,
       providers: [{ provide: UserServiceConfig, useValue: config }] }; }
}
