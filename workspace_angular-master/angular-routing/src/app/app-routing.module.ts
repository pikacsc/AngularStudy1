import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const basicRoutes: Routes = [
  // { path: '', component: IntroComponent },
  // { path: 'hello', component: HelloComponent },
  // { path: 'router-link-test', component: RouterLinkTestComponent },
  // { path: 'href-test', component: HrefTestComponent },
  // { path: 'pages/first-page', component: FirstPageComponent },
  // { path: 'pages/second-page', component: SecondPageComponent },
  // { path: 'pages/third-page', component: ThirdPageComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'admin', component: AdminComponent }
];

const lazyRoutes: Routes = [
  {
    path: 'lazy',
    loadChildren: 'app/player/player.module#PlayerModule',
    // canLoad: [AuthGuard]
  }
];

const appRoutes: Routes = [
  ...basicRoutes,
  ...lazyRoutes,
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
