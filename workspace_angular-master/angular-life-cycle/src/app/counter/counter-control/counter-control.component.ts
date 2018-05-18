import { Component, OnInit } from '@angular/core';
import { CounterBridgeService } from '../counter.service';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.css']
})
export class CounterControlComponent implements OnInit {

  constructor(private counterBridgeService: CounterBridgeService) { }

  ngOnInit() {
  }

  increment() {
    // alert('CounterDisplayComponent 의 count 값을 +1 한다.');
    this.counterBridgeService.incremnet();
  }

  decrement() {
    // alert('CounterDisplayComponent 의 count 값을 -1 한다.');
    this.counterBridgeService.decrement();
  }
}
