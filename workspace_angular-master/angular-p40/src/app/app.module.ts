import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TwowayComponent } from './binding/twoway.component';
import { EtcComponent } from './etc/etc.component';
import { NgclassComponent } from './binding/ngclass/ngclass.component';
import { NgstyleComponent } from './binding/ngstyle/ngstyle.component';
import { NgifComponent } from './binding/ngif/ngif.component';
import { NgforComponent } from './binding/ngfor/ngfor.component';
import { RefComponent } from './binding/ref/ref.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TwowayComponent,
    EtcComponent,
    NgclassComponent,
    NgstyleComponent,
    NgifComponent,
    NgforComponent,
    RefComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
