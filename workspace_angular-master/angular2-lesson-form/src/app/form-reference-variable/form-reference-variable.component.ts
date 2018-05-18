import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-reference-variable',
  templateUrl: './form-reference-variable.component.html',
  styleUrls: ['./form-reference-variable.component.css']
})
export class FormReferenceVariableComponent implements OnInit {
  user = { id: '', name: '', password: '' }

  constructor() { }

  ngOnInit() {
  }

  submitForm(f) {
    var name = (<HTMLInputElement>document.querySelector('#name')).value;
    // var name = (<HTMLInputElement>document.getElementById('name')).value;
    console.log('name = ', name);

    if(name){
      f.value.name = name;
    }

    alert(JSON.stringify(f.value));

    if(f.value.name){
      delete f.value.name;
    }
  }
}
