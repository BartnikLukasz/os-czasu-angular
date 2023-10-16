import { Component } from '@angular/core';
import { Event } from '../event';
import { Category } from '../category';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  event: Event = new Event('', '', '', new Date(), new Date(), '', '');
  categories: Category[] = [];

  constructor() {
    var numberOfCategories = Number(sessionStorage.getItem('numberOfCategories'));
    for (let i = 0; i < numberOfCategories; i++) {
      this.categories.push(JSON.parse(sessionStorage.getItem(`category${i}`) ||
        JSON.stringify(new Category(
          'category0',
          'Category 0',
          'rgba(200,100,100,1)'
        ))));
    }
  }

  onSubmit() {
    var numberOfEvents = Number(sessionStorage.getItem('numberOfEvents'));
    var category = this.categories.find(c => c.id === this.event.category)
    this.event.id = `event${numberOfEvents}`
    this.event.backgroundColor = category?.backgroundColor || 'rgba(200,100,100,1)';
    sessionStorage.setItem(this.event.id, JSON.stringify(this.event));

    sessionStorage.setItem('numberOfEvents', String(numberOfEvents + 1));
  }
}
