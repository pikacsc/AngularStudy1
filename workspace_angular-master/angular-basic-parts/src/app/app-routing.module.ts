import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomEventDirectiveComponent } from './custom-event-directive/custom-event-directive.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'built-in-pipe', component: BuiltInPipeComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },
  { path: 'custom-event-directive', component: CustomEventDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
