import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { KpopComponent } from './kpop/kpop.component';
import { EmpComponent } from './emp/emp.component';

import { KpopHttpService } from './kpop/kpop-http.service';
import { EmpHttpService } from './emp/emp-http.service';
import { BoardComponent } from './board/board.component';
import { BoardServiceService } from './board/board-service.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    KpopComponent,
    EmpComponent,
    BoardComponent
  ],
  providers: [KpopHttpService, EmpHttpService, BoardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
