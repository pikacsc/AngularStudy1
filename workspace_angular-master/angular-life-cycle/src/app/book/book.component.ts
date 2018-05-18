import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book;
  books = [
    { id: '001', name: '타샤의 정원 (리커버 특별판)', price: 15800, date: '20170831', img: 'img001.jpg' },
    { id: '002', name: '언어의 온도', price: 13800, date: '20160801', img: 'img002.jpg' },
    { id: '003', name: '보노보노처럼 살다니 다행이야 (특별판)', price: 16000, date: '20170401', img: 'img003.jpg' },
    { id: '004', name: '청춘의 독서 (리커버 에디션)', price: 14800, date: '20170701', img: 'img004.jpg' },
    { id: '005', name: '나는 나로 살기로 했다', price: 13800, date: '20161101', img: 'img005.jpg' }];

  constructor() { }

  ngOnInit() {
  }

  onSelectBook(name) {
    this.book = this.books.find(book => book.name === name);

    // 파이프를 사용하는 코드로 바꿀것
    var year = this.book.date.substring(0, 4);
    var month = this.book.date.substring(4, 6);
    var day = this.book.date.substring(6, 8);
    this.book.publishDate = year + '-' + month + '-' + day;
  }
}
