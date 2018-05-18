import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BuiltInValidatorComponent } from './built-in-validator/built-in-validator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElementStatusComponent } from './element-status/element-status.component';
import { FormReferenceVariableComponent } from './form-reference-variable/form-reference-variable.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/built-in-validator', pathMatch: 'full' },
      { path: 'built-in-validator', component: BuiltInValidatorComponent },
      { path: 'element-status', component: ElementStatusComponent },
      { path: 'form-reference-variable', component: FormReferenceVariableComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  declarations: [
    AppComponent,
    BuiltInValidatorComponent,
    NotFoundComponent,
    ElementStatusComponent,
    FormReferenceVariableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
