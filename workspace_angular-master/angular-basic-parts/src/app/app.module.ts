import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HelloService } from './service/hello.service';
import { ProfileComponent } from './profile/profile.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { MyDatePipe } from './pipe/my-date.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { FirstPipe } from './pipe/first.pipe';
import { MyHiddenDirective } from './directive/my-hidden.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { MyHighlightDirective } from './directive/my-highlight.directive';
import { CustomEventDirectiveComponent } from './custom-event-directive/custom-event-directive.component';

@NgModule({
  // 외부 모듈 임포트: 모듈만 임포트하면
  // 그 안에 자원은 자동적으로 처리되어 사용할 수 있다.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ // 컴포넌트, 디렉티브, 파이프 등록
    AppComponent,
    HomeComponent,
    ProfileComponent,
    BuiltInPipeComponent,
    MyDatePipe,
    CustomPipeComponent,
    ShortenPipe,
    FirstPipe,
    MyHiddenDirective,
    CustomDirectiveComponent,
    MyHighlightDirective,
    CustomEventDirectiveComponent
  ],
  providers: [HelloService], // 서비스 등록
  bootstrap: [AppComponent] // 기동 컴포넌트 지정
})
export class AppModule { }
