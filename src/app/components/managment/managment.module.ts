import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentRoutingModule } from './managment.routing';
/** Components */
import { ManagmentProductsComponent } from './managment-products/managment-products.component';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagmentProductsComponent],
  imports: [
    CommonModule,
    ManagmentRoutingModule,
    MatInputModule,
    
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ManagmentModule { }
