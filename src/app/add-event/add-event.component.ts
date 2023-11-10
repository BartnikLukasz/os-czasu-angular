import { Component, EventEmitter, Output } from '@angular/core';
import { Event } from '../event';
import { Category } from '../category';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  event: Event = new Event('', '', '', '', '', '', '');
  categories: Category[] = [];

  @Output() handleAdd = new EventEmitter();

  constructor() {
    this.categories = JSON.parse(sessionStorage.getItem('categories') || '');
  }

  onSubmit() {
    console.log("Trying to submit" + this.categories);
    var category = this.categories.find(c => c.id === this.event.category)
    var events = JSON.parse(sessionStorage.getItem('events') || '') as Array<Event>;
    this.event.backgroundColor = category?.backgroundColor || '#992222';
    var numberOfEvents = JSON.parse(sessionStorage.getItem('numberOfEvents') || '');
    this.event.id = 'event'+numberOfEvents;
    sessionStorage.setItem('numberOfEvents', numberOfEvents+1);
    events.push(this.event);
    sessionStorage.setItem('events', JSON.stringify(events));
    this.handleAdd.emit(this.event.id);
  }
}
