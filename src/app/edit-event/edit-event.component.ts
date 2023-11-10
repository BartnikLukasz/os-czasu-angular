import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';
import { Category } from '../category';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  @Input() event: Event = new Event('', '', '', '', '', '', '');
  categories: Category[] = [];
  @Output() handleDelete = new EventEmitter();
  isFormVisible: boolean = false;

  ngOnInit() {
    this.categories = JSON.parse(sessionStorage.getItem('categories') || '');
    }

  onSubmit() {
    var category = this.categories.find(c => c.id === this.event.category)
    this.event.backgroundColor = category?.backgroundColor || '#992222';

    var events = JSON.parse(sessionStorage.getItem('events') || '') as Array<Event>;
    events = events.map(e => e.id === this.event.id ? this.event : e);
    sessionStorage.setItem('events', JSON.stringify(events));
  }

  showHideForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  onDelete(eventId: string) {
    var events = JSON.parse(sessionStorage.getItem('events') || '') as Array<Event>;
    events = events.filter(event => event.id !== eventId)
    sessionStorage.setItem('events', JSON.stringify(events));
    this.handleDelete.emit(eventId);
  }

}
