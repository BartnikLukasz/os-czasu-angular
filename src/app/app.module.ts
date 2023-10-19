import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { CategoriesComponent } from './categories/categories.component';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditEventComponent } from './edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventTimelineComponent,
    CategoriesComponent,
    EventComponent,
    AddEventComponent,
    AddCategoryComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'event-timeline', component: EventTimelineComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'add-event', component: AddEventComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
