import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

  constructor() { }

  getContact(id) {
    console.log('ContactService.getContact() called!!!');

    // console.log('typeof id === '+(typeof id));
    let myId: number = +id; // casting
    // console.log('typeof myId === '+(typeof myId));

    return Observable.of({
      id: myId,
      name: 'Gildong Hong',
      phone: '01012345678',
      website: 'http://www.google.com',
    }).delay(3000);
  }
}
