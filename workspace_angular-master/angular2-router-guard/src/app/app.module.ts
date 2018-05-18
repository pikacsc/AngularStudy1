import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AnotherModule } from './another/another.module';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { ChildrenModule } from './children/children.module';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CanLoadGuardService } from './guard/can-load-guard.service';
import { CanActivateGuardService, UserToken, Permissions } from './guard/can-activate-guard.service';
import { CanActivateChildGuardService } from './guard/can-activate-child-guard.service';
import { CanDeactivateGuardService } from './guard/can-deactivate-guard.service';

/*
    https://angular.io/docs/js/latest/api/router/index/Routes-type-alias.html
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/child1', pathMatch: 'full' },
      { path: 'child1', component: Child1Component, canDeactivate: [CanDeactivateGuardService] },
      { path: 'child2/:id', component: Child2Component, canActivate: [CanActivateGuardService] },
      { path: 'child3', component: Child3Component },
      { path: 'lazy-load/lazy-load', loadChildren: 'app/lazy-load/lazy-load.module#LazyLoadModule', canLoad: [CanLoadGuardService] },
      // LazyLoadModule ===> { path: 'lazy-load', component: LazyLoadComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: '/not-found' },
    ]),
    AnotherModule,
    LazyLoadModule,
    ChildrenModule,
  ],
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    NotFoundComponent,
  ],
  providers: [
    CanLoadGuardService,
    CanActivateGuardService, UserToken, Permissions,
    CanActivateChildGuardService,
    CanDeactivateGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
