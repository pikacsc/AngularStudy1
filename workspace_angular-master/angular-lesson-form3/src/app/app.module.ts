import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FormArrayComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
