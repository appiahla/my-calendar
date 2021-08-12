import { Class } from "./class";

export class Day {
  date: Date;
  items: Class[];

  constructor(date: Date, items: Class[]) {
    this.date = date;
    this.items = items;
  }
}

export const days: Array<Day> = [
  {
    date: new Date(),
    items: [
    ]
  }
]
