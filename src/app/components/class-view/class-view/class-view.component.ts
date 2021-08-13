// import { classes } from './../../../objects/class';
import { Component, OnInit } from '@angular/core';
import { Class, classes } from 'src/app/objects/class';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {
  classList: Class[] = classes;

  constructor() { }

  ngOnInit(): void { }



}
