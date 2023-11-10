import { Component, SimpleChanges } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories: Category[] = [];

  constructor() {
    this.categories = JSON.parse(sessionStorage.getItem('categories') || '');
  }

  onUpdate(category: Category) {
    var categories = JSON.parse(sessionStorage.getItem('categories') || '') as Array<Category>;
    categories = categories.map(c => c.id === category.id ? category : c);
    sessionStorage.setItem('categories', JSON.stringify(categories));    this.refreshCategories();
  }

  onDelete(categoryId: string) {
    var categories = JSON.parse(sessionStorage.getItem('categories') || '') as Array<Category>;
    categories = categories.filter(category => category.id !== categoryId)
    sessionStorage.setItem('categories', JSON.stringify(categories));
  }

  public refreshCategories() {
    this.categories = JSON.parse(sessionStorage.getItem('categories') || '');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.refreshCategories();
  }
}
