import { Component, SimpleChanges } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  numberOfCategories: number;
  categories: Category[] = [];

  constructor() {
    this.numberOfCategories = Number(sessionStorage.getItem('numberOfCategories'));
    for (let i = 0; i < this.numberOfCategories; i++) {
      this.categories.push(JSON.parse(sessionStorage.getItem(`category${i}`) ||
        JSON.stringify(new Category(
          'category0',
          'Category 0',
          '#993333'
        ))));
    }
  }

  onUpdate(category: Category) {
    sessionStorage.setItem(category.id, JSON.stringify(category));
    this.refreshCategories();
  }

  onDelete(categoryId: string) {
    sessionStorage.removeItem(categoryId);
    console.log('Removing item: '+categoryId);
    sessionStorage.setItem('numberOfCategories', String(this.numberOfCategories - 1));
    this.refreshCategories();
  }

  public refreshCategories() {
    this.categories = [];

    this.numberOfCategories = Number(sessionStorage.getItem('numberOfCategories'));
    for (let i = 0; i < this.numberOfCategories; i++) {
      this.categories.push(JSON.parse(sessionStorage.getItem(`category${i}`) ||
        JSON.stringify(new Category(
          'category0',
          'Category 0',
          'rgba(200,100,100,1)'
        ))));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.refreshCategories();
  }
}
