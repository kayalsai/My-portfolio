import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  date = new Date();
  time: any;
  hour:any;
  sec:any;
  min:any;
  printTime:any;
  constructor() { }
  ngOnInit(): void {
    this.getTime();
  }
  getTime() {
    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    let session = "AM";
    if (hh == 12) {
      hh = 12;

    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM"
    }
    this.hour = hh < 10 ? "0" + hh : hh;
    this.min = mm < 10 ? "0" + mm : mm;
    this.sec = ss < 10 ? "0" + ss : ss;
    this.time = hh + ":" + mm + ":" + ss + ' ' + session;
   
  }

}
