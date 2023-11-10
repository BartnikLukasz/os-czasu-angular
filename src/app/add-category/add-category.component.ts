import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  category: Category = new Category('', '', '');
  @Output() emitter: EventEmitter<any> = new EventEmitter();

  onSubmit() {
    console.log('Adding category: '+this.category.name);
    var categories = JSON.parse(sessionStorage.getItem('categories') || '') as Array<Category>;
    var numberOfCategories = JSON.parse(sessionStorage.getItem('numberOfCategories') || '');
    this.category.id = 'category'+numberOfCategories;
    categories.push(this.category);
    sessionStorage.setItem('categories', JSON.stringify(categories));
    sessionStorage.setItem('numberOfCategories', numberOfCategories+1);
    this.emitter.emit('added category');
  }
}
