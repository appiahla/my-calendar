import { Class } from "./class";

export class Day {
  date: any[];
  items: Class[];

  constructor(date: any[], items: Class[]) {
    this.date = date;
    this.items = items;
  }
}
