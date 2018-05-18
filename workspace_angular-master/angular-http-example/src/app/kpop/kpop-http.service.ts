import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Kpop } from './kpop.model';
// Observale 객체에 동적으로 toPromise 자원을 등록하는
// polyfill 작업을 수행한다.
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KpopHttpService {

  constructor(private http: Http) { }

  getIdols(): Promise<any> {
    return this.http.get('./assets/server/kpop.json')
      .toPromise(); // Observale 객체를 Promise 객체로 변경한 후 리턴한다.
  }
}
