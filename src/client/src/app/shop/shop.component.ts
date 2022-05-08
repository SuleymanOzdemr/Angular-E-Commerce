import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/IBrand';
import { IProduct } from '../shared/models/IProduct';
import { IType } from '../shared/models/productType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: IProduct[]=[];
  brands: IBrand[]=[];
  types: IType[]=[];

  constructor(private shopservice: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

getProducts(){
  this.shopservice.getProducts().subscribe(response =>{
    this.products = response.data;
},err =>{
  console.log(err)
});
}
getBrands(){
  this.shopservice.getBrands().subscribe(response =>{
    this.brands = response;
  },err =>{
    console.log(err)
  })
}
getTypes(){
  this.shopservice.getTypes().subscribe(response =>{
    this.types = response;
  },err =>{
    console.log(err)
  })
}

}
