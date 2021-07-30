export class Assignment {
  due: string;
  title: string;
  notes: string[];

  constructor(due: string, title: string, notes: string[]) {
    this.due = due;
    this.title = title;
    this.notes = notes;
  }
}


