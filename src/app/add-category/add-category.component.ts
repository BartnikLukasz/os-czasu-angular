import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  category: Category = new Category('', '', '');

  onSubmit() {
    var numberOfCategories = Number(sessionStorage.getItem('numberOfCategories'));
    this.category.id = `category${numberOfCategories}`;
    sessionStorage.setItem(this.category.id, JSON.stringify(this.category));

    sessionStorage.setItem('numberOfCategories', String(numberOfCategories + 1));
  }
}
