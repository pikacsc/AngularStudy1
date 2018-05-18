import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentDetailComponent } from './experiments/experiment-detail/experiment-detail.component';

import { StateService } from './common/state.service';
import { ExperimentsService } from './common/experiments.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiments', component: ExperimentsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule, CommonModule, HttpModule, FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperimentsComponent, ExperimentDetailComponent
  ],
  providers: [ExperimentsService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
