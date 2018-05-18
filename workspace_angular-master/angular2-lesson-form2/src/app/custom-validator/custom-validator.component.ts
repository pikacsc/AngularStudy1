import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputValidator } from '../validator/input-validator';

@Component({
  selector: 'custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent implements OnInit {

  form: FormGroup;
  username: FormControl;

  constructor(private fb: FormBuilder) {

    this.username = new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(10),
      InputValidator.startWithNumber
    ]));

    this.form = fb.group({
      username: this.username
    });
  }

  ngOnInit() {
  }

}
