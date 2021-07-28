import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MonthDateService {
  weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthLenghts: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  days: string[] = [];
  firstDate: any[] = [];
  lastDate: string = "";
  todayMonth: string = "";
  // todayDate: Date = new Date();

  // constructor() { }

  getFirstDay(findYear: number, findMonth: number) {
    this.todayMonth = this.months[findMonth];
    //months start at 0
    var date = new Date(findYear, findMonth);
    var month = date.getMonth(), year = date.getFullYear();
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);

    if (typeof this.weekdays[firstDay.getDay()] != 'undefined') {
      this.firstDate[0] = this.weekdays[firstDay.getDay()];
      this.firstDate[1] = firstDay.getDay();
      this.lastDate = this.weekdays[lastDay.getDay()];
    }
  }

  displayFirstDay(yearNum: number, monthNum: number) {
    this.getFirstDay(yearNum, monthNum);
    this.days.length = 0;
    let i = -1, j = 0, count = 0;
    
    while (i < this.firstDate[1]) {
      this.days[j] = "";
      i++;
      j++;
      count++;
    }
    j = 1;

    for (let k = this.firstDate[1]; k < this.monthLenghts[monthNum]+(count-1); k++) {
      this.days[k] = j.toString();
      j++;
    }

    let len = this.days.length;
    for (let l = len; l <= 42; l++) {
      this.days[l] = "";

    }
  }
}
