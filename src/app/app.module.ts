import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/_components/header/header.component';
import { ItemClothesComponent } from './shared/_components/item-clothes/item-clothes.component';
import { BannerComponent } from './shared/_components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLateralComponent } from './shared/_components/menu-lateral/menu-lateral.component';
import { ItemCardComponent } from './shared/_components/item-card/item-card.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
/** Anuglar material modules */

import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


import { FooterComponent } from './shared/_components/footer/footer.component';


import { NgxImageZoomModule } from 'ngx-image-zoom';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ShopModule } from './components/shop/shop.module';
import { ManagmentModule } from './components/managment/managment.module';
import { NotFountComponent } from './shared/_components/not-fount/not-fount.component';


@NgModule({
  declarations: [
    AppComponent,
    // NotFountComponent
    // HeaderComponent,
    // ItemClothesComponent,
    // BannerComponent,
    // MenuLateralComponent,
    // ItemCardComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ShopModule,
    ManagmentModule,
    MatIconModule,
    MatBadgeModule,
    NgxImageZoomModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
