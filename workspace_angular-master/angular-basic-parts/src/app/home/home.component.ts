import { Component, OnInit } from '@angular/core';
import { HelloService } from '../service/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [HelloService]
})
export class HomeComponent implements OnInit {
  homeTitle;

  constructor(private helloService: HelloService) {
    // this.helloService = helloService;
  }

  ngOnInit() {
    this.homeTitle = this.helloService.getTitle();
  }

}
