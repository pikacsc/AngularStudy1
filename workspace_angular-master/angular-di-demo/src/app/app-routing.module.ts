import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ValueProviderComponent } from './value-provider/value-provider.component';
import { FactoryProviderComponent } from './factory-provider/factory-provider.component';
import { ClassProviderComponent } from './class-provider/class-provider.component';
import { ClassProviderComponent2 } from './class-provider/class-provider.component2';
import { FactoryComponent } from './factory/factory.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'value-provider', component: ValueProviderComponent },
  { path: 'factory-provider', component: FactoryProviderComponent },
  { path: 'class-provider', component: ClassProviderComponent },
  { path: 'class-provider2', component: ClassProviderComponent2 },
  { path: 'factory-pattern', component: FactoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
