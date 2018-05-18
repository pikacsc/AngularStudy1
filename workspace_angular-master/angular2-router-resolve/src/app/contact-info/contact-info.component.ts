import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contact;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("this.route.snapshot.data = " + JSON.stringify(this.route.snapshot.data));
    this.contact = this.route.snapshot.data['yyy'];
  }

}
