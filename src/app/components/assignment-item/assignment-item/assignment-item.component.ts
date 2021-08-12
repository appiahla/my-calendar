import { assignment3 } from './../../../objects/assignment';
import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/objects/assignment';
import { assignment1 } from 'src/app/objects/assignment';
import { assignment2 } from 'src/app/objects/assignment';

@Component({
  selector: 'app-assignment-item',
  templateUrl: './assignment-item.component.html',
  styleUrls: ['./assignment-item.component.css']
})
export class AssignmentItemComponent implements OnInit {
  temp: Assignment[] = [];

  constructor() { }

  ngOnInit(): void {
    this.temp[0] = assignment1;
    this.temp[1] = assignment2;
    this.temp[2] = assignment3;
  }

}
