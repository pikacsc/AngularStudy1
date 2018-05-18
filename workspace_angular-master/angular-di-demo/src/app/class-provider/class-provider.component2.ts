import { Component, OnInit } from '@angular/core';
import { SuperPowerEngine as spEngine } from './super-power-engine.service';
import { Engine } from './engine.service';

@Component({
  selector: 'app-class-provider',
  // templateUrl: './class-provider.component.html',
  template: `
 <div>{{engine.name}}</div>
 <div>{{spEngine.name}}</div>
 <div>{{result}}</div>
 `,
  styleUrls: ['./class-provider.component.css'],
  // providers: [spEngine, { provide: Engine, useClass: spEngine }]
  providers: [
    { provide: Engine, useExisting: spEngine },
    spEngine,
  ]
})
export class ClassProviderComponent2 implements OnInit {

  result: string;

  constructor(public engine: Engine, public spEngine: spEngine) {
    if (engine === spEngine) {
      this.result = "두 객체는 동일 객체입니다.";
      // throw new Error('Error');
    } else {
      this.result = "두 객체는 다른 객체입니다.";
    }
  }

  ngOnInit() {
  }
}
