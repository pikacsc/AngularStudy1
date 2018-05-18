import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.css']
})
export class RefComponent implements OnInit {
  init = { num1: 10, num2: 20 };

  constructor() { }

  ngOnInit() {
  }

}
