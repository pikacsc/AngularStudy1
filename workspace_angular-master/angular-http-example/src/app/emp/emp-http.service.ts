import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Emp } from './emp.model';

@Injectable()
export class EmpHttpService {
  private empsUrl: string = "http://localhost:8080/employees";
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: Http) { }

  getEmps(): Observable<Emp[]> {
    return this.http.get(this.empsUrl)
      .map(this.extractData) // 받은 데이터를 가공해서 리턴한다.
      .catch(this.handleError); // 에러가 발생하는 경우를 대비해서 대응코드를 설정한다.
  }

  addEmp(firstName: string, lastName: string): Observable<Emp> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let emp = { "id": 0, "firstName": firstName, "lastName": lastName };

    return this.http.post(this.empsUrl, JSON.stringify(emp), options)
      .map(this.extractDataForObject)
      .catch(this.handleError);
  }

  removeEmp(emp): Observable<Emp[]> {
    const url = `${this.empsUrl}/${emp.id}`;

    return this.http.delete(url, { headers: this.headers })
      .map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log('res = ' + JSON.stringify(res));
    let json = res.text();
    json = JSON.parse(json);
    return json || [];
  }

  private extractDataForObject(res: Response) {
    console.log('res = ' + JSON.stringify(res));
    let json = res.text();
    json = JSON.parse(json);
    return json || {};
  }

  private handleError(res: Response) {
    console.log(res);
    return Observable.throw(res.json().error || 'Server Down');
  }
}
