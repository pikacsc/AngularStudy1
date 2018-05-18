import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.css']
})
export class ContactDataComponent implements OnInit {
  contact;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("this.route.snapshot.data = " + JSON.stringify(this.route.snapshot.data));
    this.contact = this.route.snapshot.data['contact'];
  }

}
