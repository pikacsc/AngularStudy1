import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //n
import { CommonModule } from '@angular/common'; // 공통 유틸
import { HttpModule } from '@angular/http';   //원격서버와의 통신
import { RouterModule, Routes } from '@angular/router'; //<router;
import { HomeComponent } from './home/home.component'
import { NotfoundComponent } from './notfound/notfound.component'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
