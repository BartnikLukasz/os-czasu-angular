import { Component, SimpleChanges } from '@angular/core';
import { Category } from '../category';
import { Event } from '../event';

@Component({
  selector: 'app-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.css']
})
export class EventTimelineComponent {

  categories: Category[] = [];
  events: Event[] = [];
  numberOfEvents: number = 0;
  numberOfCategories: number = 0;

  constructor() {
    this.refresh();
  }

  handleDeleteEvent(eventId: string) {
    this.refresh();
  }

  refresh() {
    this.events = [];
    this.categories = [];
    this.numberOfEvents = parseInt(sessionStorage.getItem('numberOfEvents') || '0');
    this.numberOfCategories = Number(sessionStorage.getItem('numberOfCategories'));
    for (let i = 0; i < this.numberOfEvents; i++) {
      this.events.push(JSON.parse(sessionStorage.getItem(`event${i}`) || JSON.stringify(new Event(
        'event0',
        'Title of section 1',
        'Content of section 1',
        new Date(),
        new Date(),
        'category1',
        '#992222'))));
    }
    for (let i = 0; i < this.numberOfCategories; i++) {
      this.categories.push(JSON.parse(sessionStorage.getItem(`category${i}`) ||
        JSON.stringify(new Category(
          'category0',
          'Category 0',
          '#993333'
        ))));
    }  }

}
