import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title: string = 'book component as parent';

  constructor() { }

  ngOnInit() {
  }

}
