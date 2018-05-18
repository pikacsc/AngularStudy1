import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  public isActive: boolean = false;
  myclass: string = "active";

  constructor() { }

  ngOnInit() {
  }

}
