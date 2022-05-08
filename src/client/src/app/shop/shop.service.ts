import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/IBrand';
import { IPagination } from '../shared/models/IPagination';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseurl = "https://localhost:44351/api/"
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<IPagination>(this.baseurl +'Products')
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseurl +'products/brands')
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseurl +'products/types')
  }
  

}
