export class Assignment {
  due: string;
  title: string;
  notes: string[];

  public constructor(due?: string, title?: string, notes?: string[]) {
    this.due = due || "";
    this.title = title || "";
    this.notes = notes || [];
  }

  toString() {
    return "Title: " + this.title + " Due: " + this.due + " Notes";
  }

  // getTitle() {
  //   return this.title;
  // }

  // getDueDate() {
  //   return this.due;
  // }

  // getNotes() {
  //   return this.notes;
  // }
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
