import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataService: DataService;
  str: string;
  // 앵귤러가 만들어 놓은 서비스 객체 DataService를 받고 싶다.
  constructor(dataService: DataService) {
    // console.log(dataService.str);
    // console.log(dataService.getData());
    // dataService.setData('변경된값');
    // console.log(dataService.getData());
    this.dataService = dataService;
  }

  ngOnInit() {}

  getFromService() {
      this.str = this.dataService.getData();
  }

  saveToService() {
      this.dataService.setData(this.str);
      alert('Saved');
  }

}
