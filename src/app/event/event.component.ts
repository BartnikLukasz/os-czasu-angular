import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css', '../event-timeline/event-timeline.component.css']
})
export class EventComponent implements OnInit {

  event!: Event
  @Input() elementNumber!: number;

  constructor() { }

  ngOnInit(): void {
    console.log('Getting event ' + this.elementNumber);

    const eventRaw = JSON.parse(sessionStorage.getItem(`event${this.elementNumber}`) || JSON.stringify(new Event(
      'event0',
      'Title of section 1',
      'Content of section 1',
      new Date(),
      new Date(),
      'category1',
      'rgba(200,100,100,1)')));

    const event = new Event(
      eventRaw.id,
      eventRaw.title,
      eventRaw.content,
      eventRaw.startDate,
      eventRaw.endDate,
      eventRaw.category,
      eventRaw.backgroundColor
      )

    this.event = event;
  }
}
