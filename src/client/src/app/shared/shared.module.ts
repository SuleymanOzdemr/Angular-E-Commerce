import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
     CarouselModule.forRoot(),
     ReactiveFormsModule
    
  ],
  exports:[
    PaginationModule,
    CarouselModule,
    OrderDetailsComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
