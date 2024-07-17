import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  constructor(private listProductService: ProductsService) {}

  checkoutForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
  });

  saveProduct() {
    this.listProductService.addProduct(this.checkoutForm.value as any);
  }
}
