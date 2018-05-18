import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

  constructor(private router: Router) { }

  canDeactivate() {
    console.log('CanDeactivateGuardService.canDeactivate() called');
    return window.confirm("화면이 전환되면 저장되지 않은 상태정보는 손실됩니다.\n경로를 변경하시겠습니까?");
  }
}
