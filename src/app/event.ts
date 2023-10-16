export class Event {
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  category: string;
  backgroundColor: string;

  constructor(
    title: string,
    content: string,
    startDate: Date,
    endDate: Date,
    category: string,
    backgroundColor: string
  ) {
    this.title = title;
    this.content = content;
    this.startDate = startDate;
    this.endDate = endDate;
    this.category = category;
    this.backgroundColor = backgroundColor;
  }
}
