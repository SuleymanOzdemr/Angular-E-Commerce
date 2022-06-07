import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper.component'
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    OrderDetailsComponent,
    StepperComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
     CarouselModule.forRoot(),
     BsDropdownModule.forRoot(),
     ReactiveFormsModule,
     CdkStepperModule,
     RouterModule
    
  ],
  exports:[
    PaginationModule,
    CarouselModule,
    OrderDetailsComponent,
    ReactiveFormsModule,
    BsDropdownModule,
    CdkStepperModule,
    StepperComponent
    
  ]
})
export class SharedModule { }
