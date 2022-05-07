import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/IPagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseurl = "https://localhost:44351/api/"
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<IPagination>(this.baseurl +'Products')
  }
}
