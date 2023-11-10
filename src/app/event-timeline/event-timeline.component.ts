import { Component, SimpleChanges } from '@angular/core';
import { Category } from '../category';
import { Event } from '../event';
import { EventFilter } from '../event-filter';

@Component({
  selector: 'app-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.css']
})
export class EventTimelineComponent {

  categories: Category[] = [];
  events: Event[] = [];
  sort: string = 'dateAsc'

  constructor() {
    this.refresh();
    this.filterEvents(new EventFilter());
    this.sortEvents();
  }

  filterEvents(eventFilter: EventFilter) {
    this.refresh();
    if (eventFilter.categoriesIdIn) {
      this.events = this.events.filter(event => eventFilter.categoriesIdIn.some(categoryId => categoryId === event.category));
    }
    this.events = this.events.filter(event => new Date(event.startDate) > new Date(eventFilter.eventDateFrom) && new Date(event.startDate) < new Date(eventFilter.eventDateTo));
  }

  sortEvents() {
    if (this.sort === 'dateAsc') {
      this.events = this.events.sort((a, b) => new Date(a.startDate) > new Date(b.startDate) ? 1 : -1)
    }
    if (this.sort === 'dateDesc') {
      this.events = this.events.sort((a, b) => new Date(a.startDate) < new Date(b.startDate) ? 1 : -1)
    }
    if (this.sort === 'titleAsc') {
      this.events = this.events.sort((a, b) => a.title.localeCompare(b.title))
    }
    if (this.sort === 'titleDesc') {
      this. events = this.events.sort((a, b) => b.title.localeCompare(a.title))
    }
  }

  toggleSortByDate() {
    if(this.sort === 'titleAsc' || this.sort === 'titleDesc') {
      this.sort = 'dateAsc';
    }
    if (this.sort === 'dateAsc') {
      this.sort = 'dateDesc';
    } else if (this.sort === 'dateDesc') {
      this.sort = 'dateAsc';
    }
    this.sortEvents();
  }

  toggleSortByTitle() {
    if(this.sort === 'dateAsc' || this.sort === 'dateDesc') {
      this.sort = 'titleAsc';
    }
    if (this.sort === 'titleAsc') {
      this.sort = 'titleDesc';
    } else if (this.sort === 'titleDesc') {
      this.sort = 'titleAsc';
    }
    this.sortEvents();
  }

  handleDeleteEvent(eventId: string) {
    this.refresh();
  }

  refresh() {
    this.events = JSON.parse(sessionStorage.getItem('events') || '');
    this.categories = JSON.parse(sessionStorage.getItem('categories') || '');
  }

}
