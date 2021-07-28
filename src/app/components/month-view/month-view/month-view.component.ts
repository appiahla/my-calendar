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
  monthNumber: number = 11;
  yearNumber: number = 2021;

  constructor(
    private monthDate : MonthDateService
  ) { }

  ngOnInit(): void {
    //months start at 0
    // this.monthDate.getFirstDay(2021, this.monthNumber);
    this.checkMonthNum();
    this.monthDate.displayFirstDay(this.yearNumber, this.monthNumber);
    this.tempDay = this.monthDate.firstDate[0];
    this.todayMonth = this.monthDate.todayMonth;
    this.days = this.monthDate.days;
  }

  //month doesn't display past december
  increaseMonth() {
    this.monthNumber++;
    this.checkMonthNum();
    this.monthDate.displayFirstDay(this.yearNumber, this.monthNumber);
    this.todayMonth = this.monthDate.todayMonth;
    // console.log(this.monthNumber);
  }

  decreaseMonth() {
    this.monthNumber--;
    this.checkMonthNum();
    this.monthDate.displayFirstDay(this.yearNumber, this.monthNumber);
    this.todayMonth = this.monthDate.todayMonth;
    // console.log(this.monthNumber);
  }

  checkMonthNum() {
    if (this.monthNumber > 11) {
      this.monthNumber = 0;
      this.yearNumber++;
    }
  }
}
