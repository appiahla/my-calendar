import { Assignment } from "./assignment";

export class Class {
  color: string;
  name: string;
  professor: string;
  schedule: Schedule;
  assignmentList: Assignment;//[];

  constructor(color: string, name: string, professor: string, schedule: Schedule, assignments: Assignment) {
    this.color = color;
    this.name = name;
    this.professor = professor;
    this.schedule = schedule;
    this.assignmentList = assignments;
  }
}

export class Schedule {
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
}

export const classes: Array<Class> = [
  {
    color: "blue",
    name: "Programming Languages",
    professor: "Shepherd",
    assignmentList: new Assignment(),
    schedule: new Schedule('', '12pm-6pm', '', '', '', '', '')
  }
];

// classes[0].schedule.monday = "12pm-4pm";
// classes[0].schedule.wednesday = "4-6pm";
