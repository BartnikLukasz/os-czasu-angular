export class Event {
  id: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  category: string;
  backgroundColor: string;

  constructor(
    id: string,
    title: string,
    content: string,
    startDate: Date,
    endDate: Date,
    category: string,
    backgroundColor: string
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.startDate = startDate;
    this.endDate = endDate;
    this.category = category;
    this.backgroundColor = backgroundColor;
  }
}
