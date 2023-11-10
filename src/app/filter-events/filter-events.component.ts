import { Component, EventEmitter, Output } from '@angular/core';
import { EventFilter } from '../event-filter';
import { Category } from '../category';

@Component({
  selector: 'app-filter-events',
  templateUrl: './filter-events.component.html',
  styleUrls: ['./filter-events.component.css']
})
export class FilterEventsComponent {

  categories: Category[] = [];
  eventFilter: EventFilter = new EventFilter();
  @Output() handleFilter = new EventEmitter();

  constructor() {
    this.categories = JSON.parse(sessionStorage.getItem('categories') || '');
  }

  onSubmit() {
    console.log('Emitting: ' + this.eventFilter.categoriesIdIn + this.eventFilter.eventDateFrom);
    this.handleFilter.emit(this.eventFilter);
  }
}
