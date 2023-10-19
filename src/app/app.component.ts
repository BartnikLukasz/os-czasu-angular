import { Component } from '@angular/core';
import { Event } from './event';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'os-czasu-angular';

  constructor() {
    sessionStorage.setItem('numberOfEvents', '2');
    sessionStorage.setItem('numberOfCategories', '2');

    var category0 = new Category(
      'category0',
      'Category 0',
      '#993333'
    );

    var category1 = new Category(
      'category1',
      'Category 1',
      '#339999'
    );

    var event0 = new Event(
      'event0',
      'Event 1',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      new Date(2023, 10, 5),
      new Date(2023, 10, 5),
      category0.id,
      category0.backgroundColor
    )

    var event1 = new Event(
      'event1',
      'Event 2',
      '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      new Date(2023, 10, 7),
      new Date(2023, 10, 7),
      category1.id,
      category1.backgroundColor
    )

    sessionStorage.setItem(category0.id, JSON.stringify(category0));
    sessionStorage.setItem(category1.id, JSON.stringify(category1));

    sessionStorage.setItem(event0.id, JSON.stringify(event0));
    sessionStorage.setItem(event1.id, JSON.stringify(event1));
  }
}
