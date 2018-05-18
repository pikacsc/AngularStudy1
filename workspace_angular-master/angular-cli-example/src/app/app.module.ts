import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common'; // BrowserModule 임포트로 생략이 가능하다.
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InterpolationComponent } from './interpolation.component';
import { OnewayComponent } from './binding/oneway.component';
import { ContactComponent } from './binding/contact.component';
import { MyClickDirective } from './binding/my-click.directive';
import { OnewayStatementComponent } from './binding/oneway-statement.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule, HttpModule, FormsModule,
    AppRoutingModule
  ],
  declarations: [ // 화면과 관련된 모든자원을 설정한다. 컴포넌트, 디렉티브, 파이프
    AppComponent,
    ProfileComponent,
    InterpolationComponent,
    OnewayComponent,
    ContactComponent,
    MyClickDirective,
    OnewayStatementComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
