import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any;
  category: any;
  newCategory: any;

  ngOnInit(): void {
    this._categoryService.getAllCategories().subscribe((data) => {
      console.log('categories', data);
      this.categories = data;
    });
  }

  constructor(private _categoryService: CategoryService) {}

  getOne(id: number) {
    this._categoryService.getOne(id).subscribe((data) => {
      console.log('fetched category', data);
      this.category = data;
    });
  }

  create(data: any) {
    this._categoryService.create(data).subscribe((data) => {
      this.newCategory = data;
      console.log('created category', data);
    });
  }

  update(id: number, data: any) {
    this._categoryService.update(id, data).subscribe((data) => {
      console.log('updated category', data);
    });
  }

  getPaginated(limit: number, offset: number) {
    this._categoryService.getPaginated(limit, offset).subscribe((data) => {
      console.log('paginated categories', data);
      this.categories = data;
    });
  }
}

