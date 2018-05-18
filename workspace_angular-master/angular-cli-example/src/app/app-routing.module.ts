import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InterpolationComponent } from './interpolation.component';
import { OnewayComponent } from './binding/oneway.component';
import { ContactComponent } from './binding/contact.component';
import { OnewayStatementComponent } from './binding/oneway-statement.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'oneway', component: OnewayComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'oneway-statement', component: OnewayStatementComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
