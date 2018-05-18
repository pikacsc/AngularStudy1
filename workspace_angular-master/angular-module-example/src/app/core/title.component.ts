import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title = '';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.nickName;
  }

  ngOnInit() {
  }
}
