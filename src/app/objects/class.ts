import { Assignment } from "./assignment";

export class Class {
  color: string;
  name: string;
  professor: string;
  schedule: Schedule;
  assignmentList: Assignment;//[];
  location: string;

  constructor(color: string, name: string, professor: string, schedule: Schedule, assignments: Assignment, location: string) {
    this.color = color;
    this.name = name;
    this.professor = professor;
    this.schedule = schedule;
    this.assignmentList = assignments;
    this.location = location;
  }
}

export class Schedule implements Iterable<String>{
  sunday: string = '';
  monday: string = '';
  tuesday: string = '';
  wednesday: string = '';
  thursday: string = '';
  friday: string = ' ';
  saturday: string = '';

  constructor(sunday: string, monday: string, tuesday: string, wednesday: string, thursday: string, friday: string, saturday: string) {
    this.sunday = sunday || '';
    this.monday = monday || '';
    this.tuesday = tuesday || '';
    this.wednesday = wednesday || '';
    this.thursday = thursday || '';
    this.friday = friday || '';
    this.saturday = saturday || '';
  }

  *[Symbol.iterator](): Iterator<string> {
    for (let key of Object.keys(this)) {
        yield key;
    }
  }
}

export const classes: Array<Class> = [
  {
    color: "blue",
    name: "Programming Languages",
    professor: "Shepherd",
    assignmentList: new Assignment(),
    schedule: new Schedule('', '12pm-6pm', '', '', '', '', ''),
    location: "this-place"
  },
  {
    color: "purple",
    name: "Introduction to German",
    professor: "name1",
    assignmentList: new Assignment(),
    schedule: new Schedule('', '', '', 'this-time','','',''),
    location: "this-new-place"
  }
];
