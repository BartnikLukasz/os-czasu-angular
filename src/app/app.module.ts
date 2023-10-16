import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { CategoriesComponent } from './categories/categories.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventTimelineComponent,
    CategoriesComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'event-timeline', component: EventTimelineComponent},
      {path: 'categories', component: CategoriesComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
