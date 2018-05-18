import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from './validator';

@Component({
  selector: 'form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.css']
})
export class FormStatusComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({
      userId: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern("^[a-z][a-z0-9]{1,9}")])),
      email: new FormControl('', Validators.compose([
        Validators.required, Validator.emailValidator]))
    });
  };

  ngOnInit() {
  }

}
