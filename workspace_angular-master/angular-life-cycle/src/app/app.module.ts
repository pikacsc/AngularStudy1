import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { BookComponent } from './book/book.component';
import { BookImageComponent } from './book/book-image/book-image.component';
import { ViewChildComponent, Item, ItemComponent } from './view-child/view-child.component';
import { CounterComponent } from './counter/counter.component';
import { CounterDisplayComponent } from './counter/counter-display/counter-display.component';
import { CounterControlComponent } from './counter/counter-control/counter-control.component';

import { CounterBridgeService } from './counter/counter.service';
import { ContentChildComponent, Pane, Tab } from './content-child/content-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ContentChildrenComponent, Index } from './content-children/content-children.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    BookComponent,
    BookImageComponent,
    ViewChildComponent, Item, ItemComponent,
    CounterComponent, CounterDisplayComponent, CounterControlComponent,
    ContentChildComponent, Pane, Tab, ViewChildrenComponent,
    ContentChildrenComponent, Index
  ],
  providers: [CounterBridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
