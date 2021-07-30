import { Assignment } from "./assignment";

export class Class {
  color: string;
  name: string;
  professor: string;
  schedule: string[];
  assignments: Assignment[];

  constructor(color: string, name: string, professor: string, schedule: string[], assignments: Assignment[]) {
    this.color = color;
    this.name = name;
    this.professor = professor;
    this.schedule = schedule;
    this.assignments = assignments;
  }
}
