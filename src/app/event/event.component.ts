import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css', '../event-timeline/event-timeline.component.css']
})
export class EventComponent implements OnInit {

  @Input() event!: Event
  @Output() handleDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  childEvent(eventId: string) {
    this.handleDelete.emit(eventId);
  }
}
