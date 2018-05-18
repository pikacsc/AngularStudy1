import { Component, OnInit } from '@angular/core';
import { EmpHttpService } from './emp-http.service';
import { Emp } from './emp.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';

  emps: Emp[] = [
    { id: 1, firstName: 'AA', lastName: 'aa' },
    { id: 2, firstName: 'BB', lastName: 'bb' },
    { id: 3, firstName: 'CC', lastName: 'cc' },
    { id: 4, firstName: 'DD', lastName: 'dd' },
  ];
  errorMessage: string;

  constructor(private empHttpService: EmpHttpService) { }

  ngOnInit() {
    this.getEmps();
  }

  getEmps() {
    this.empHttpService.getEmps()
      .subscribe(emps => this.emps = emps, error => this.errorMessage = <any>error);
  }

  addEmp(firstName: string, lastName: string) {
    this.empHttpService.addEmp(firstName, lastName)
      .subscribe(emp => this.emps.push(emp), error => this.errorMessage = <any>error);
  }

  removeEmp(emp: Emp) {
    this.empHttpService.removeEmp(emp)
      .subscribe(emps => {
        // this.emps = emps
        console.log("removeEmp")
        // Json-Server는 응답 데이터가 없다.
        // 성공 콜백함수가 기동한다는 것은 처리가 정상이라는 의미이므로
        // 클라이언트에서 해당 데이터를 이미 알고 있고 바로 삭제하면 된다.
        var idx = this.emps.findIndex((e)=>e.id === emp.id);
        this.emps.splice(idx, 1);
      }, error => this.errorMessage = <any>error);
    return false; // anchor 태그의 이벤트 전파를 막는다.
  }

  onSubmit(f) {
    console.log(f);
    if (f.valid) {
      var emp = f.value;
      this.addEmp(emp.firstName, emp.lastName);
    }
  }
}
