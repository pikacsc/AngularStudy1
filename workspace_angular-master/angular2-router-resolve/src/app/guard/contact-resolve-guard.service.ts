import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { ContactService } from '../service/contact.service';
import { Contact } from '../interface/contact';

@Injectable()
export class ContactResolveGuardService implements Resolve<Contact> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.contactService.getContact(route.params['id']);
  }
}
