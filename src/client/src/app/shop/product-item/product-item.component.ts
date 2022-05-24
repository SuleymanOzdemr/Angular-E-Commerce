import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  //products :IProduct[]  onceki calışmayan denemeler
  //products: IProducts[]=[];
  // @Input() product: IProduct;

  // @Input() set product(value: IProduct){
  //   product:value;
  // }
  @Input()
  product!:IProduct;
  constructor(private basketService : BasketService) { }

  ngOnInit(): void {
  }
  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }

}
