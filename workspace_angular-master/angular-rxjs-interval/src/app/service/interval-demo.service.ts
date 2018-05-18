import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Injectable()
export class IntervalDemoService {

  constructor(private http: Http) { }

  timer = Observable.timer(0, 5000);

  getNewValue = () => {
    return this.timer
      .flatMap((i) => this.http.get("http://localhost:3000/cars"))
  }

}
