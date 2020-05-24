import { Component } from '@angular/core';
import { IProduct, product } from '../mocks/products'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  product: IProduct = product
  chosenProduct!: IProduct

  addProduct(product: any){
    this.chosenProduct = product
  }
  get ch (){
    return this.chosenProduct ? JSON.stringify(this.chosenProduct) : ''
  }
}
