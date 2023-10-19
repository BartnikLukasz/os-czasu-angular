import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';
import { Category } from '../category';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  event: Event = new Event('', '', '', new Date(), new Date(), '', '');
  categories: Category[] = [];
  @Input() eventId!: string;
  @Output() handleDelete = new EventEmitter();
  isFormVisible: boolean = false;

  ngOnInit() {
    var numberOfCategories = Number(sessionStorage.getItem('numberOfCategories'));
    for (let i = 0; i < numberOfCategories; i++) {
      this.categories.push(JSON.parse(sessionStorage.getItem(`category${i}`) ||
        JSON.stringify(new Category(
          'category0',
          'Category 0',
          '#992222'
        ))));
    }

    this.event = JSON.parse(sessionStorage.getItem(this.eventId) || JSON.stringify(new Event(
      'event0',
      'Title of section 1',
      'Content of section 1',
      new Date(),
      new Date(),
      'category1',
      '#992222')));
  }

  onSubmit() {
    var category = this.categories.find(c => c.id === this.event.category)
    this.event.backgroundColor = category?.backgroundColor || '#992222';
    sessionStorage.setItem(this.event.id, JSON.stringify(this.event));
  }

  showHideForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  onDelete(eventId: string) {
    sessionStorage.removeItem(eventId);
    console.log('Removing item: '+eventId);
    var numberOfEvents = Number(sessionStorage.getItem('numberOfEvents'));
    sessionStorage.setItem('numberOfEvents', String(numberOfEvents - 1));
    this.handleDelete.emit(eventId);
  }

}
