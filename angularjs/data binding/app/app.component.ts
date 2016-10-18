import { Component } from '@angular/core';
import { Product } from './product'
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Product of my choice is: {{myProduct.name}}</h2>
    <p>Products:</p>
    <img src={{imgsrc}} />
    <ul>
      <li *ngFor="let product of products" (click)="onClickMe()" >
         {{product.name}}{{clickMessage}}
      </li>
    </ul>

      <input (keyup)="00" #input name="dewei">
  <p>{{input.value+"|" +input.name}}</p>
    `
})
export class AppComponent {
  title = 'Dewei\'s Store';
  imgsrc = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  products: Product[] = [
    { id: 1, name: "dewei" },
    { id: 2, name: "awad" }
  ]
  myProduct = this.products[0];

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  // values = '';

  // // without strong typing
  // onKey(event: any) {
  //   this.values += event.target.value + ' | ';
  // }
}
