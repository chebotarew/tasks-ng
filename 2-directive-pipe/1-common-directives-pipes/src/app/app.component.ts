import { Component } from '@angular/core';
import {products, IProduct} from '../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: IProduct[] = products
  addProduct(){

  }
}
