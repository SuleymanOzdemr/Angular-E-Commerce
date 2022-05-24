import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem } from '../shared/models/Basket';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/IProduct';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(null!);
  basket$ = this.basketSource.asObservable();
  constructor(private http: HttpClient) { }

  getBasket(id: string) {
    return this.http.get(this.baseUrl + 'basket?id=' + id).pipe(
       map((basket:any) => {
         this.basketSource.next(basket);
       })
    ); // any yerine IBasket olmalı
  }

   setBasket(basket: IBasket) {
     return this.http.post(this.baseUrl + 'basket', basket).subscribe(
       (response: any) => {
         this.basketSource.next(response);
         if (localStorage.getItem('basket_id') === 'undefined') {
           localStorage.setItem('basket_id', response.id);
         }
         console.log(response);
       },
       (error) => {
         console.log(error);
       }
     );
 }
 getCurrentBasketValue() {
  return this.basketSource.value;
} 
addItemToBasket(item: IProduct, quantity = 1) {
  const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(
    item,
    quantity
  );
  const basket = this.getCurrentBasketValue() ?? this.createBasket();
  console.log('addItemToBasket=>', basket);
  basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
  this.setBasket(basket);
}

private addOrUpdateItem(
  items: IBasketItem[],
  itemToAdd: IBasketItem,
  quantity: number
): IBasketItem[] {
  console.log('addOrUpdateItem=>', items);
  const index = items.findIndex((i) => i.id === itemToAdd.id);
  if (index === -1) {
    items.push(itemToAdd);
  } else {
    items[index].quantity += quantity;
  }
  return items;
}

private createBasket(): IBasket {
  const basket = new Basket();
  localStorage.setItem('basket_id', basket.id);
  return basket;
}
private mapProductItemToBasketItem(
  item: IProduct,
  quantity: number
): IBasketItem {
  return {
    id: item.id,
    productName: item.name,
    price: item.price,
    pictureUrl: item.pictureUrl,
    quantity,
    brand: item.productBrand,
    type: item.productType,
  };
}
}
