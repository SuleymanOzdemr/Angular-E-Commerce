import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
     CarouselModule.forRoot()
    
  ],
  exports:[
    PaginationModule,
    CarouselModule,
    OrderDetailsComponent
  ]
})
export class SharedModule { }
