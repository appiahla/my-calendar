import { Component, OnInit } from '@angular/core';
import { MonthDateService } from 'src/app/services/month/month-date.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {

  constructor(
    private monthDate : MonthDateService
  ) { }

  ngOnInit(): void {}

  

}
