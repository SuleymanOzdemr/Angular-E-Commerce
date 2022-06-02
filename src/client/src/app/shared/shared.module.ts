import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
     CarouselModule.forRoot(),
     BsDropdownModule.forRoot(),
     ReactiveFormsModule
    
  ],
  exports:[
    PaginationModule,
    CarouselModule,
    OrderDetailsComponent,
    ReactiveFormsModule,
    BsDropdownModule,
    
  ]
})
export class SharedModule { }
