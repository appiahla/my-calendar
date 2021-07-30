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


export const assignment1 = new Assignment(
  "07/30/2021",
  "Chapter 1 Notes",
  [
    "simple assignment",
    "ask tabbi to work together"
  ]  );

export const assignment2 = new Assignment(
  "08/30/2021",
  "Chapter 5 Notes",
  [
    "hard assignment",
    "ask tabbi to work together"
  ]  );
