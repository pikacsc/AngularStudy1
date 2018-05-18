import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

  save(){
    this.display = false;
    alert('save');
  }
}
