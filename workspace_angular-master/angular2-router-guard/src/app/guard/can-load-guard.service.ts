import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';


@Injectable()
export class CanLoadGuardService implements CanLoad {
  constructor() { }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    console.log('CanLoadGuardService.canLoad() called');
    console.log(url);
    console.log(route);

    if (window.confirm("로드 되었습니다. 진행하시겠습니까?")) {
      return true;
    } else {
      return false;
    }
  }

}
