import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message: string;
  message1: string = new Date().toDateString();
  items = ['g', 'h', 'u'];
  loggedId = true;
  text = 'Hello';
  constructor() {
    setInterval(() => {
      this.message = new Date().toTimeString();
    }, 1000);
  }

  ngOnInit() {
  }
  myEvent(event) {
    console.log(event);
  }
}
