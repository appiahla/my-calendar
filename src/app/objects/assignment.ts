export class Assignment {
  due: string = '';
  title: string = '';
  notes: string[] = [];

  public constructor(due?: string, title?: string, notes?: string[]) {
    this.due = due || "";
    this.title = title || "";
    this.notes = notes || [];
  }
}

export const assignments: Array<Assignment> = [
  {
    due: '07/30/2021',
    title: 'Chapter 1 Notes',
    notes: [
      'simple assignment',
      'ask tabbi to work together'
    ]
  },
  {
    due: "08/30/2021",
    title: "Chapter 5 Notes",
    notes: [
      "18 pages",
      "ask tabbi to work together"
    ]
  },
  {
    due: "08/26/2021",
    title: "Partner Project",
    notes: [
      "need to find new partner",
      "make sure to write the plan before starting the individual parts of the project"
    ]
  }
];
