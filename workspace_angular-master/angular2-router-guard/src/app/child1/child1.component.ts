import { Component, OnInit } from '@angular/core';
import { CanActivateGuardService } from '../guard/can-activate-guard.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers: [CanActivateGuardService]
})
export class Child1Component implements OnInit {

  constructor(private CanActivateGuardService: CanActivateGuardService) { }

  ngOnInit() {
  }

}
