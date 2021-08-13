// import { assignments } from './../../../objects/assignment';
import { Component, OnInit } from '@angular/core';
import { Assignment, assignments } from 'src/app/objects/assignment';

@Component({
  selector: 'app-assignment-item',
  templateUrl: './assignment-item.component.html',
  styleUrls: ['./assignment-item.component.css']
})
export class AssignmentItemComponent implements OnInit {
  temp: Assignment[] = assignments;

  constructor() { }

  ngOnInit(): void { }

}
