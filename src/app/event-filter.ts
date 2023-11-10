import { Category } from "./category";

export class EventFilter {
  categoriesIdIn: string[] = (JSON.parse(sessionStorage.getItem('categories') || '') as Array<Category>).map(category => category.id);
  eventDateFrom: string = '1000-1-1';
  eventDateTo: string = '3000-1-1';
}
