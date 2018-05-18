import { Component, OnInit } from '@angular/core';
import { CarService } from '../provider/car.service';
import { FactoryProvider } from '../provider/car.service.provider';
import { Speedmeter, Engine } from '../provider/car.service';

@Component({
  selector: 'app-factory-provider',
  // templateUrl: './factory-provider.component.html',
  template: `
 <div>엔진이름 : {{carService.engine.name}}</div>
 <div>현재속도 : {{carService.speedmeter.speed}} km/h</div>
 <div>최대속도 : {{carService.speedmeter.maxSpeed}} km/h</div>
 `,
  styleUrls: ['./factory-provider.component.css'],
  providers: [Speedmeter, Engine, FactoryProvider]
})
export class FactoryProviderComponent implements OnInit {

  constructor(public carService: CarService) {
    console.log(JSON.stringify(carService));
  }

  ngOnInit() {
  }
}
