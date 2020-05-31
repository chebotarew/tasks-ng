import { Pipe, PipeTransform } from '@angular/core';
import { IProductImage } from '../../mocks/products';

@Pipe({
  name: 'imgUrl',
})
export class ImgUrlPipe implements PipeTransform {
  transform(value: IProductImage[]): string {
    if(!value || !value.length) return ''
    return value[0].url || '';
  }
}
