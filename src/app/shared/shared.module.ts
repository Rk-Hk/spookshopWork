import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./_components/header/header.component";
import { ItemClothesComponent } from "./_components/item-clothes/item-clothes.component";
import { BannerComponent } from "./_components/banner/banner.component";
import { MenuLateralComponent } from "./_components/menu-lateral/menu-lateral.component";
import { ItemCardComponent } from "./_components/item-card/item-card.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { NotFountComponent } from "./_components/not-fount/not-fount.component";
import { NotFountShopComponent } from "./_components/not-fount-shop/not-fount-shop.component";
import { MatIconModule } from "@angular/material";

@NgModule({
  declarations: [
    HeaderComponent,
    ItemClothesComponent,
    BannerComponent,
    MenuLateralComponent,
    ItemCardComponent,
    FooterComponent,
    NotFountComponent,
    NotFountShopComponent,
  ],
  exports: [
    HeaderComponent,
    ItemClothesComponent,
    BannerComponent,
    MenuLateralComponent,
    ItemCardComponent,
    FooterComponent,
    NotFountComponent,
    NotFountShopComponent,
  ],
  imports: [CommonModule, MatIconModule],
})
export class SharedModule {}
