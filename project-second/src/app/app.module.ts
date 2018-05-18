import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgclassComponent } from './binding/ngclass/ngclass.component';
import { NgifComponent } from './binding/ngif/ngif.component';
import { NgforComponent } from './binding/ngfor.component';
import { RefComponent } from './binding/ref/ref.component';
import { MyDatePipe } from './pipe/my-date.pipe';
import { MyHidden2Directive } from './directive/my-hidden2.directive';
import { MyHighlightDirective } from './directive/my-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    NgifComponent,
    NgforComponent,
    RefComponent,
    MyDatePipe,
    MyHidden2Directive,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
