import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MonthDateService {
  weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  firstDate: string = "";
  lastDate: string = "";
  // todayDate: Date = new Date();

  // constructor() { }

  getFirstDay(findYear: number, findMonth: number) {
    //months start at 0
    var date = new Date(findYear, findMonth);
    var month = date.getMonth(), year = date.getFullYear();
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);

    if (typeof this.weekdays[firstDay.getDay()] != 'undefined') {
      this.firstDate = this.weekdays[firstDay.getDay()];
      this.lastDate = this.weekdays[lastDay.getDay()];
    }
  }
}
