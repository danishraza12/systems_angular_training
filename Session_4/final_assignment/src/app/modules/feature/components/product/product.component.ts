import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any;

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe((data) => {
      console.log('Products', data);
      this.products = data;
    });
  }

  constructor(private _productService: ProductService) {}

  getOne(id: number) {
    this._productService.getOne(id).subscribe((data) => {
      console.log('fetched product', data);
    });
  }

  create(data: any) {
    this._productService.create(data).subscribe((data) => {
      console.log('created product', data);
    });
  }

  update(id: number, data: any) {
    this._productService.update(id, data).subscribe((data) => {
      console.log('updated product', data);
    });
  }

  getPaginated(limit: number, offset: number) {
    this._productService.getPaginated(limit, offset).subscribe((data) => {
      console.log('paginated products', data);
      this.products = data;
    });
  }
}
