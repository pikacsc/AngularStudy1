import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable()
export class CanActivateChildGuardService implements CanActivateChild {
  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('CanActivateChildGuardService.canActivateChild() called');
    console.log(url);
    console.log(route.params);

    return true;
  }

}
