import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  // styleUrls: ['./interpolation.component.css']
  styles: [`.my-italic { font-style: italic; }`]
})
export class InterpolationComponent implements OnInit {

  basket = {
    items: ['apple', 'grapee', 'orange']
  };
  goodbye: string;
  myclass = "my-italic";
  x: string = 'A';

  constructor() {
    let x: string = '굿';
    let y: string = '바이';
    this.goodbye = `${x + y}`;
  }

  ngOnInit() {
  }

  hello() {
    return "hello";
  }

}
