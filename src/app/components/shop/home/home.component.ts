import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private listClothes:any;

  constructor(
    private _router: Router,
    private _productService: ProductService,
    private _firebaseProductService: FirestoreService
  ) { 
    console.log("Cargando constructor home");
    
  }


  ngOnInit() {
    console.log("Cargando home component ");
    
    this._firebaseProductService.getAllClothesDetail().subscribe(
      (clothesSnapshot) => {
        this.listClothes = clothesSnapshot
        
        console.log("ROPAS DE FIREBASE : ", clothesSnapshot);
      },
      error => {
        console.log("ERROR FIREBASE : ", error);
        
      }
    )
  }


  

}
