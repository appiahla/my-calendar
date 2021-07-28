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
    this.monthDate.checkLeapYear(this.yearNumber);
    //months start at 0
    this.checkMonthNum();
    this.monthDate.displayFirstDay(this.yearNumber, this.monthNumber);
    this.tempDay = this.monthDate.firstDate[0];
    this.todayMonth = this.monthDate.todayMonth;
    this.days = this.monthDate.days;
  }

  increaseMonth() {
    this.monthNumber++;
    this.changeMonthDisplay();
  }

  decreaseMonth() {
    this.monthNumber--;
    this.changeMonthDisplay();
  }

  changeMonthDisplay() {
    this.checkMonthNum();
    this.monthDate.displayFirstDay(this.yearNumber, this.monthNumber);
    this.todayMonth = this.monthDate.todayMonth;
  }

  checkMonthNum() {
    if (this.monthNumber > 11) {
      this.monthNumber = 0;
      this.yearNumber++;
    } else if (this.monthNumber < 0) {
      console.log(this.monthNumber)
      this.monthNumber = 11;
      this.yearNumber--;
    }
  }
}
