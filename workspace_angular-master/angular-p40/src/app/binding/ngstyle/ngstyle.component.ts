import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  text: string = '안녕하세요';
  weight = 'bold';
  private style = 'italic';

  isChecked: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeWeight($event: any): void {
    this.weight = $event.target.checked ? 'bold' : 'normal';
  }

}
