import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../mocks/products';
@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  product!: IProduct

  @Output()
  addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>()

  addProduct(product: IProduct){
    this.addToCart.emit(product)
  }
}
