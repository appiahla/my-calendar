import { Component, OnInit } from '@angular/core';
import { MonthDateService } from 'src/app/services/month/month-date.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {
  tempDay: string = "";
  todayMonth: string = "";
  days: string[] = [];

  constructor(
    private monthDate : MonthDateService
  ) { }

  ngOnInit(): void {
    //months start at 0
    this.monthDate.getFirstDay(2021, 6);
    this.tempDay = this.monthDate.firstDate[0];
    this.todayMonth = this.monthDate.todayMonth;
    this.monthDate.displayFirstDay(6);
    this.days = this.monthDate.days;

  }



}
