import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-statement',
  templateUrl: './oneway-statement.component.html',
  styleUrls: ['./oneway-statement.component.css']
})
export class OnewayStatementComponent implements OnInit {
  public msg: string = "버튼을 선택해주세요";
  public msg2: string = "이름과 이메일을 입력해주세요";
  clicked: any = "버튼을 선택해주세요";

  constructor() { }

  ngOnInit() {
  }

  greetings(msg: string) {
    this.msg = msg;
  }

  saveContact(contact) {
    this.msg2 = JSON.stringify(contact);
  }

}
