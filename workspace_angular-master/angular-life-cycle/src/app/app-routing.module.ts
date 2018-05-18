import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { CounterComponent } from './counter/counter.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ContentChildrenComponent } from './content-children/content-children.component';

const routes: Routes = [
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'view-child', component: ViewChildComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'content-child', component: ContentChildComponent },
  { path: 'view-children', component: ViewChildrenComponent },
  { path: 'content-children', component: ContentChildrenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
