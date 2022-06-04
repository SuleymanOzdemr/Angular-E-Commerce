import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';



  const routes: Routes = [
   // { path: '', component: HomeComponent, data: { breadcrumb: 'Ana Sayfa' } },
    {
      path: 'home',
      component: HomeComponent,
      data: { breadcrumb: { alias: 'home' } },
    },
  
    { path: 'shop', component: ShopComponent, data: { breadcrumb: 'shop' } },
    {
      path: 'shop/:id',
      component: ProductDetailsComponent,
      data: { breadcrumb: { alias: 'shopDetail' } },
    },
    // { path: 'basket', component: BasketComponent, data: { breadcrumb: 'basket' } },
    {
      path: 'basket',
      loadChildren: () =>
        import('./basket/basket.module').then((mod) => mod.BasketModule),
      data: { breadcrumb: 'Basket' },
    },
    {
      path: 'checkout',
     // canDeactivate:[AuthGuard],
      loadChildren: () =>
        import('./checkout/checkout.module').then((mod) => mod.CheckoutModule),
      data: { breadcrumb: 'Checkout' },
    },
    {
      path: 'account',
      loadChildren: () =>
        import('./account/account.module').then((mod) => mod.AccountModule),
      data: { breadcrumb: 'Account' },
    },
 
 

  //tüm componentler için gerçekleştir (redirecTo) 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
