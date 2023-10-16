import { Component } from '@angular/core';
import { Event } from './event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'os-czasu-angular';

  constructor() {
    sessionStorage.setItem('numberOfEvents', '2');

    var event0 = new Event(
      'Event 1',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      new Date(2023, 10, 5),
      new Date(2023, 10, 5),
      'category0',
      'rgba(200,100,100,1)'
    )

    var event1 = new Event(
      'Event 2',
      '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      new Date(2023, 10, 7),
      new Date(2023, 10, 7),
      'category1',
      'rgba(100,200,200,1)'
    )

    sessionStorage.setItem('event0', JSON.stringify(event0));
    sessionStorage.setItem('event1', JSON.stringify(event1));
  }
}
