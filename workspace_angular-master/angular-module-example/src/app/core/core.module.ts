import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { TitleComponent } from './title.component';
import { UserService, UserServiceConfig } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TitleComponent], // 화면관련 자원은 직접 익스포트 설정을 해야한다.
  declarations: [TitleComponent],
  providers: [UserService]
})
export class CoreModule {
  // 부모 주입기에 CoreModule 이 존재하는지 체크하기 위해서
  // @SkipSelf 를 사용합니다.
  // @Optional 은 객체가 있으면 전달하고 없으면 null 을 전달합니다.
  constructor( @SkipSelf() @Optional() parentModule: CoreModule) {
    console.log('CoreModule # constructor() called.');
    if (parentModule) {
      // 코어 모듈은 전체 모듈이 공유해서 언제나 사용하는 기능을 가진 모듈입니다.
      // 코어 모듈은 하나만 존재하면 됩니다.
      throw new Error('CoreModule 이 이미 로딩되었습니다.');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  }

}
