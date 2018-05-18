import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tiny',
  template: `<h1>Hi</h1>`
})
export class TinyComponent {
}

@Component({
  // selector: 'app-parent',
  selector: 'app-root',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // directives: [TinyComponent] // deprecated
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
