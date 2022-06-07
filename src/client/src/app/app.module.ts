import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { BasketModule } from './basket/basket.module';
import { CheckoutModule } from './checkout/checkout.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { Conctact2Module } from './conctact2/conctact2.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BasketModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    ShopModule,
    HomeModule,
    CommonModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
