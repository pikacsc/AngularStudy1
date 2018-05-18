import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormGroup을 이용하려면 ReactiveFormsModule을 추가해야 한다.
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { FormStatusComponent } from './form-status/form-status.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/form-group', pathMatch: 'full' },
      { path: 'form-group', component: FormGroupComponent },
      { path: 'custom-validator', component: CustomValidatorComponent },
      { path: 'form-status', component: FormStatusComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  declarations: [
    AppComponent,
    FormGroupComponent,
    NotFoundComponent,
    CustomValidatorComponent,
    FormStatusComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
