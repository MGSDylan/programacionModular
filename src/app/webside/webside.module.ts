import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsideRoutingModule } from './webside-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import {  SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent,
 
    
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    SwiperModule,
    SharedModule,
  
  ]

})
export class WebsideModule { }
