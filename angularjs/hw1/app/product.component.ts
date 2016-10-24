import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from "@angular/router";
const PRODUCTS: Product[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-productes',
  templateUrl: '../app/product.component.html',
  styleUrls: ['../app/product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  title = 'Tour of Products';
  selectedProduct: Product;
  products: Product[];
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.create(name)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      });
  }
  delete(product: Product): void {
  this.productService
      .delete(product.id)
      .then(() => {
        this.products = this.products.filter(h => h !== product);
        if (this.selectedProduct === product) { this.selectedProduct = null; }
      });
}
  constructor(private router: Router, private productService: ProductService) { }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  ngOnInit(): void {
    this.getProducts();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
