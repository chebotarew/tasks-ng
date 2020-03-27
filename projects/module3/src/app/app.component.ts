import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { IProduct } from 'projects/module1/src/mocks/products';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: IProduct[] = [];
  public products$!: Observable<IProduct[]>;
  public page = 1;
  private pageSequence$$ = new Subject();

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }
  public addProduct(_product: IProduct) {}
  public scroll(isInit: boolean) {
    this.pageSequence$$.next(isInit ? this.page : ++this.page);
  }
}
