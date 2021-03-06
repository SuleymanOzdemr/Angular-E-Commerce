import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IBrand } from '../shared/models/IBrand';
import { IPagination } from '../shared/models/IPagination';
import { IProduct } from '../shared/models/IProduct';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/ShopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseurl = "https://localhost:44351/api/"
  constructor(private http:HttpClient) { }

  getProducts(shopParams:ShopParams){
    
    let params = new HttpParams();

    if(shopParams.brandId !==0 ){
      params = params.append('brandId',shopParams.brandId.toString());
    }
    if(shopParams.typeId !==0 ){
      params = params.append('typeId',shopParams.typeId.toString())
      
    }
    if(shopParams.search){
      params = params.append('search',shopParams.search);
    }

        params = params.append('sort', shopParams.sort);
        params = params.append('pageIndex',shopParams.pageNumber.toString());
        params = params.append('pageIndex',shopParams.pageSize.toString());
    return this.http.get<IPagination>(this.baseurl +'Products',{observe:'response',params})
    .pipe(
      map(response =>{
        return response.body;
      })
    );
  }

  getProduct(id : number){
    return this.http.get<IProduct>(this.baseurl + 'products/' + id)
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseurl +'products/brands')
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseurl +'products/types')
  }
  

}
