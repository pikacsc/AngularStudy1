import { Component } from '@angular/core';
import { UserService } from './member/service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private userService:UserService){

  }
}
