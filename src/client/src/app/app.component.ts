import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'E-Ticaret';
  

  constructor(private basketService: BasketService, private accountService: AccountService){}

  ngOnInit(): void {
      this.loadBasket();
    //  this.loadCurrentUser();
    } 

  /*  loadCurrentUser() {
      const token = localStorage.getItem('token');
      
        this.accountService.loadCurrentUser(token!).subscribe(
          () => {
            console.log('Loadded User');
          },
          (error) => {
            console.log(error);
          }
        );
      
    } */
  
    loadBasket() {
      const basketId = localStorage.getItem('basket_id');
      if (basketId) {
        this.basketService.getBasket(basketId).subscribe(
          () => {
            console.log('initiliaze basket');
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

