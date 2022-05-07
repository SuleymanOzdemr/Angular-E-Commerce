import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/IProduct';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: IProduct[]=[];

  constructor(private shopservice: ShopService) { }

  ngOnInit(): void {
    this.shopservice.getProducts().subscribe(response =>{
        this.products = response.data;
    },err =>{
      console.log(err)
    });
  }

}
