import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = new Subject<Product>();

  constructor() {}

  get getProducts() {
    return this.products.asObservable();
  }

  addProduct(product: Product) {
    this.products.next(product);
  }
}
