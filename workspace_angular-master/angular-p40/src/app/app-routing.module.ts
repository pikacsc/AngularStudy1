import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwowayComponent } from './binding/twoway.component';
import { EtcComponent } from './etc/etc.component';
import { NgclassComponent } from './binding/ngclass/ngclass.component';
import { NgstyleComponent } from './binding/ngstyle/ngstyle.component';
import { NgifComponent } from './binding/ngif/ngif.component';
import { NgforComponent } from './binding/ngfor/ngfor.component';
import { RefComponent } from './binding/ref/ref.component';

const routes: Routes = [
  { path: '', redirectTo: '/twoway', pathMatch: 'full' },
  { path: 'twoway', component: TwowayComponent },
  { path: 'etc', component: EtcComponent },
  { path: 'ng-class', component: NgclassComponent },
  { path: 'ng-if', component: NgifComponent },
  { path: 'ng-for', component: NgforComponent },
  { path: 'ref', component: RefComponent },
  { path: '**', component: TwowayComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
