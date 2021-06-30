import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop.routing';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop.component';
import { MatBadgeModule, MatIconModule, MatInputModule } from '@angular/material';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/shared/_components/header/header.component';
import { ItemClothesComponent } from 'src/app/shared/_components/item-clothes/item-clothes.component';
import { BannerComponent } from 'src/app/shared/_components/banner/banner.component';
import { MenuLateralComponent } from 'src/app/shared/_components/menu-lateral/menu-lateral.component';
import { ItemCardComponent } from 'src/app/shared/_components/item-card/item-card.component';
import { FooterComponent } from 'src/app/shared/_components/footer/footer.component';
import { NotFountShopComponent } from 'src/app/shared/_components/not-fount-shop/not-fount-shop.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent,
    ShopComponent,
    // NotFountShopComponent,

    ShopComponent,
    // HeaderComponent,
    // ItemClothesComponent,
    // BannerComponent,
    // MenuLateralComponent,
    // ItemCardComponent,
    // FooterComponent,
  ],
  exports: [
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    MatIconModule,
    MatBadgeModule,
    NgxImageZoomModule,
    HttpClientModule,
    MatInputModule,
  ]
})
export class ShopModule { }
