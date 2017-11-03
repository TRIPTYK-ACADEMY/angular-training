import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-inventory-root',
  template: `
  <div class="inventory-app"> <app-products-list
  [productList]="products"
  (onProductSelected)="productWasSelected($event)"> </app-products-list>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  product: Product;
  title = 'Our Inventory app';
  constructor() {
    // Step2
    this.products = [
      new Product(
      'MYSHOES',
      'Black Running Shoes', '/assets/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
      new Product(
      'NEATOJACKET',
      'Blue Jacket', '/assets/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
      new Product(
      'NICEHAT',
      'A Nice Black Hat', '/assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'],
      29.99)];
    // Step1
    // this.product = new Product(
    //   'NICEHAT',
    //   'A nice Black Hat',
    //   '/resources/images/products/black-hat.jpg',
    //   ['men', 'accessories', 'hats'],
    //   34.56);
  }


  productWasSelected(product: Product): void {
    console.log('product clicked: ', product);
  }
}
