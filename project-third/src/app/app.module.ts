import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // CoreModule을 가져오면 CoreModule이 import한 자원들도 쓸수 있다.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
