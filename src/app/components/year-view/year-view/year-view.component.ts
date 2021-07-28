import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.css']
})
export class YearViewComponent implements OnInit {
  year: number = 2021;
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor() { }

  ngOnInit(): void {
  }

  displayMonth(mon: number) {
    //add routing
  }

  // https://angular.io/start/start-routing
}
