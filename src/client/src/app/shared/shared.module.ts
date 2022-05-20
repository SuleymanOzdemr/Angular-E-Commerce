import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
     CarouselModule.forRoot()
    
  ],
  exports:[
    PaginationModule,
    CarouselModule
  ]
})
export class SharedModule { }
