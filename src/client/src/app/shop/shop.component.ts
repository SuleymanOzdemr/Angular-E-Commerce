import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/IBrand';
import { IProduct } from '../shared/models/IProduct';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/ShopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @ViewChild('search',{static:true}) searchTerm!: ElementRef;

  products: IProduct[]=[];
  brands: IBrand[]=[];
  types: IType[]=[];
  shopParams = new ShopParams();
  totalCount! : number;

  sortOptions  = [
    {name:'Alfabetik olarak', value:'name'},
    {name:'Deger : dusukten yuksege', value:'priceAsc'},
    {name:'Deger :yuksekten dusuge' , value:'priceDesc'}
]


  constructor(private shopservice: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

getProducts(){
  this.shopservice.getProducts(this.shopParams).subscribe(response =>{
    this.products = response!.data;
    this.shopParams.pageNumber = response?.pageIndex!;
    this.shopParams.pageSize = response?.pageSize!;
    this.totalCount = response?.count!;
    console.log(this.products);
    console.log(response);
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
  this.shopParams.brandId = brandId;
  this.shopParams.pageNumber = 1;
  this.getProducts();
}
onTypeSelected(typeId:number){
  this.shopParams.typeId = typeId;
  this.shopParams.pageNumber = 1;
  this.getProducts();
}

onSortSelected(sort : string){
  this.shopParams.sort = sort;
  this.getProducts();
}

onPageChanged(event: any){
  if(this.shopParams.pageNumber !== event){
    this.shopParams.pageNumber = event.page;
    this.getProducts();
  }
  
}
onSearch(){
  this.shopParams.search=this.searchTerm.nativeElement.value;
  this.shopParams.pageNumber = 1;
  this.getProducts();
}
onReset(){
  this.searchTerm.nativeElement.value = undefined;
  this.shopParams = new ShopParams();
  this.getProducts();
}
}
