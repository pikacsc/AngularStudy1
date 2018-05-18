import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.Service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // dataService: DataService;
  str : String;

  constructor(private dataService: DataService) {
      // this.dataService = dataService;
  }

  ngOnInit() {
  }

  getData(): string {
    return this.str = this.dataService.getData();
  }
}
