import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  // 평가 로직을 담고 있는 객체
  formX = new FormGroup({
    mandatory: new FormControl('', Validators.required),
    upperCase: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern('[A-Z]{3}')
    ])),
  });

  constructor() { }

  ngOnInit() {
  }

  setValue() {
    this.formX.setValue({mandatory: 'abc', upperCase: 'ABC'});
  }

  reset() {
    this.formX.setValue({mandatory: '', upperCase: ''});
  }

  onSubmit(event) {
    console.log('event = ' + JSON.stringify(event));

    // console.info(this.formX.value.mandatory+','+this.formX.value.upperCase);
    console.info(this.formX.get('mandatory').value+','+this.formX.get('upperCase').value);
  }

  patch() {
    this.formX.patchValue({mandatory: 'one'});
    this.formX.patchValue({upperCase: 'ONE'});
  }
}
