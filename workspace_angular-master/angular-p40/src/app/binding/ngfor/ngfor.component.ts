import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  items: Object[] = [];

  constructor() {
    this.items.push({ 'title': '한라산', 'height': '1950' });
    this.items.push({ 'title': '지리산', 'height': '1915' });
    this.items.push({ 'title': '설악산', 'height': '1707' });
  }

  ngOnInit() {
  }

}
