import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketTotals } from '../models/Basket';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  basketTotals$! :Observable<IBasketTotals>
  basketTotal!: IBasketTotals; 

  constructor(private basketService : BasketService) { }

  ngOnInit(): void {
    this.basketTotals$ = this.basketService.basketTotal$;
    this.basketTotals$.subscribe(response =>{
      this.basketTotal = response;
      console.log("Subscribe Log ",this.basketTotal);
    })
  }

}
