import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

import { DataService } from './service/data.service';
import { BindTestComponent } from './bind-test/bind-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    BindTestComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'about', component: AboutComponent},
      {path:'bind', component: BindTestComponent},
      {path:'', component: HomeComponent}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
