import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { ParentComponent, TinyComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TrusturlComponent } from './trusturl/trusturl.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    ParentComponent, TinyComponent,
    ChildComponent,
    TrusturlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [ParentComponent]
  // bootstrap: [TrusturlComponent]
})
export class AppModule { }
