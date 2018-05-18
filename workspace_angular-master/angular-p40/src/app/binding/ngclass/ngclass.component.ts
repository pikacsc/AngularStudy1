import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  // 접근제어자는 TS에서만 사용할 수 있다.
  // public, protected, private
  public isActive: boolean = false;
  private myclass: string = "active";

  constructor() { }

  ngOnInit() {
  }

}
