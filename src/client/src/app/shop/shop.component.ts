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
  brandIdSelected = 0;
  typeIdSelected = 0;


  constructor(private shopservice: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

getProducts(){
  this.shopservice.getProducts(this.brandIdSelected,this.typeIdSelected).subscribe(response =>{
    this.products = response!.data;
},err =>{
  console.log(err)
});
}
getBrands(){
  this.shopservice.getBrands().subscribe(response =>{
    var firstItem = {id:0,name:'All'};
    this.brands = [firstItem, ...response];
  },err =>{
    console.log(err)
  })
}
getTypes(){
  this.shopservice.getTypes().subscribe(response =>{
    var firstItem = {id:0,name:'All'};
    this.types =[firstItem, ...response];
  },err =>{
    console.log(err)
  })
}
onBrandSelected(brandId:number){
  this.brandIdSelected = brandId;
  this.getProducts();
}
onTypeSelected(typeId:number){
  this.typeIdSelected = typeId;
  this.getProducts();
}

}
