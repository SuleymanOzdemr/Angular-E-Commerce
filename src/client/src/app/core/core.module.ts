import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BasketModule } from '../basket/basket.module';
import { BasketComponent } from '../basket/basket.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [NavBarComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
    
  ],
  exports : [NavBarComponent,SectionHeaderComponent]
})
export class CoreModule { }
