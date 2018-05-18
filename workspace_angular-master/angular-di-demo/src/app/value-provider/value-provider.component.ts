import { Component, OnInit } from '@angular/core';
import { Config, ValueProvider } from '../provider/value.provider';

@Component({
  selector: 'app-value-provider',
  // templateUrl: './value-provider.component.html',
  template: `
    <div>서비스명 : <b>{{config.serviceName}}</b></div>
    <div>회원등급 : <b>{{config.grade | json}}</b></div>
    <div>정보 : <b [innerHTML]="config.getInfo()"></b></div>
  `,
  styleUrls: ['./value-provider.component.css'],
  providers: [ValueProvider]
  // providers: [Config]
})
export class ValueProviderComponent implements OnInit {

  constructor(public config: Config) {
    console.log(JSON.stringify(config));
  }

  ngOnInit() {
  }

}
