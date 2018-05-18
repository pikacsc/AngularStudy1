import { Component } from '@angular/core';
import { IntervalDemoService } from './service/interval-demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  data;

  constructor(private service: IntervalDemoService) { }

  ngOnInit() {
    this.service.getNewValue()
      .subscribe((res) => {
        this.count++;
        console.log('count = '+this.count);
        this.data = JSON.stringify(res.json());
      });
  }
}
