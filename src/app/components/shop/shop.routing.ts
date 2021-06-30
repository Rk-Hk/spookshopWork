import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFountShopComponent } from 'src/app/shared/_components/not-fount-shop/not-fount-shop.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop.component';


const routes: Routes = [
  { path: '', component: ShopComponent , 
    children: [
      { path: 'shop', component: HomeComponent},
      { path: 'checkout', component: CheckoutComponent},
      { path: 'cart', component: CartComponent},
      { path: 'product/:productId', component: ProductComponent},
      { path: '', redirectTo: 'shop', pathMatch: 'full'},
      { path: '**', component: NotFountShopComponent},
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
