import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFountComponent } from './shared/_components/not-fount/not-fount.component';


const routes: Routes = [
  
  { path: 'managment' , loadChildren: ()=> import ('./components/managment/managment.module').then(mod=> mod.ManagmentModule)},
  { path: '' , loadChildren: ()=> import ('./components/shop/shop.module').then(mod=> mod.ShopModule)},
  
  { path: '**', component: NotFountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
