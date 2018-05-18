import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  title: string = 'book-detail component as child';

  constructor() { }

  ngOnInit() {
  }

}
