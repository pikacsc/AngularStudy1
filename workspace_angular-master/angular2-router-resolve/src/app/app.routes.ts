import { Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDataComponent } from './contact-data/contact-data.component';

import { ContactResolveGuardService } from './guard/contact-resolve-guard.service';

export const AppRoutes: Routes = [
  {
    path: '', component: ContactListComponent
  },
  { path: 'contact/:id', component: ContactDetailComponent },
  {
    path: 'info/:id', component: ContactInfoComponent,
    resolve: {
      yyy: 'infoService'
    }
  },
  {
    path: 'data/:id', component: ContactDataComponent,
    resolve: {
      contact: ContactResolveGuardService
    }
  },
];
