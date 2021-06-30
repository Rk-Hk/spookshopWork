import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagmentProductsComponent } from './managment-products/managment-products.component';


const routes: Routes = [
  { path: '' , component: ManagmentProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagmentRoutingModule { }
