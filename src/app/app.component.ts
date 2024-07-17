import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsService } from './products.service';
import { Product } from './types/product';
import { BehaviorSubject } from 'rxjs';
import { ShareinfoComponent } from './shareinfo/shareinfo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListProductsComponent, ShareinfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'subject';
  products: Product[] = [];

  myobserver = new BehaviorSubject<string>('');

  constructor(private productsServices: ProductsService) {}

  ngOnInit() {
    // Emitimos un evento
    this.myobserver.next('Evento antes de la subscripción');

    this.myobserver.subscribe({
      next: (data) => console.log('Subscripción 1: ', data),
    });

    // a subscribir al observable

    this.myobserver.next('Evento despues de la subscripción');

    // this.productsServices.getProducts.subscribe({
    //   next: (product) => {
    //     console.log('Nuevo producto: ', product);
    //     this.products.push(product);
    //   },
    // });

    // this.productsServices.getProducts.subscribe({
    //   next: (product) => {
    //     console.log('Nuevo producto desde mi segunda subscripción: ', product);
    //   },
    // });
  }
}
