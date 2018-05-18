import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// BrowserModule로 CommonModule 선언이 생략가능하다.
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { MemberModule } from './member/member.module';
import { PlayerModule } from './player/player.module';
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';
import { CoreTestComponent, HelloComponent, IntroComponent} from './component/index';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, FormsModule, HttpModule,
    CoreModule.forRoot({nickName: 'Happy'}),
    MemberModule, PlayerModule, ShareModule
  ],
  declarations: [
    AppComponent,
    IntroComponent,
    CoreTestComponent,
    HelloComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule # constructor() called.');
  }
}
