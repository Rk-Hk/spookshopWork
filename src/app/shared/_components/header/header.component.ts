import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private listcategories = ['Colección Hombre', 'Colección Mujer', 'Colección Niños']
  private listcategoriesSeconds = ['Zapateria', 'Accesorios']

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
  }

  sendCategorySelected = (categorySelected)=> {
    console.log("CATEGORIA SELECTED : ", categorySelected);
    
    
    this._productService.spreadCategorySelected(categorySelected);
  }

}
