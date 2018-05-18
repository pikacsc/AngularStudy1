import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit, DoCheck {
  isShow = true;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.isShow);
  }

}
