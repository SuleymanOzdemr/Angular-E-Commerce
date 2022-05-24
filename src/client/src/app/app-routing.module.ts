import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {path:'',component:HomeComponent, data:{breadcrump:'Ana Sayfa'}},
  {path:'shop',component:ShopComponent,data:{breadcrump:'shop'}},
  {path:'shop/:id',component:ProductDetailsComponent,data:{breadcrump:'shopDetails'}},
  {path:'basket',component:BasketComponent, data:{breadcrumb:'basket'}},
  {path:'**',redirectTo:'',pathMatch:'full'},

  // {
  //   path: 'basket',
  //   loadChildren: () =>
  //     import('./basket/basket.module').then((mod) => mod.BasketModule),
  //   data: { breadcrumb: 'Basket' },
  // }
  //tüm componentler için gerçekleştir (redirecTo)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
