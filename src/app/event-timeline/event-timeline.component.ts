import { Component } from '@angular/core';

@Component({
  selector: 'app-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.css']
})
export class EventTimelineComponent {

  numberOfEvents: number;

  constructor() {
    this.numberOfEvents = parseInt(sessionStorage.getItem('numberOfEvents') || '0');
  }

}
