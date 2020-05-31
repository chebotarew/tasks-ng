import { Component, Input } from '@angular/core';

export enum StarsIcon {
  FILLED = 'star',
  HALF = 'star_half',
  BORDERED = 'star_border',
}

const MAX_RATE = 5

const emptyRate = [StarsIcon.BORDERED,StarsIcon.BORDERED,StarsIcon.BORDERED,StarsIcon.BORDERED,StarsIcon.BORDERED]

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass'],
})
export class StarRatingComponent {
  @Input()
  rate!: number
  stars!: string[]


  getFractionalStar():StarsIcon {
    const b = this.rate - Math.floor(this.rate)
    if( 0 < b && b <= 0.25 ){
       return StarsIcon.BORDERED
    }
    if( 0.25 < b && b <= 0.75 ){
      return StarsIcon.HALF
    }
    if( 0.75 < b ){
      return StarsIcon.FILLED
    }
    return StarsIcon.BORDERED
  }

  getStars(): StarsIcon[]{
    if(!this.rate){
      return emptyRate
    }
    const result = []
    const filledStars = Math.trunc(this.rate)
    let empty = false
    for(let i = 1; i<= MAX_RATE; i++){

      if(empty){
        result.push(StarsIcon.BORDERED)
        continue
      }

      if(i <= filledStars){
        result.push(StarsIcon.FILLED)
        continue
      }
      result.push(this.getFractionalStar())
      empty = true
    }
    return result
  }

}
