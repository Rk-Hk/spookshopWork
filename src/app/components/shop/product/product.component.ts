import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId:string;
  productSelected: string;

  imageProduct='https://spook.pe/wp-content/uploads/2020/12/mockup-of-a-customizable-crewneck-sweatshirt-hanging-against-a-concrete-wall-33997-18.png';
  zoomMode='hover'
  magnificationZoom='2'

  cantItemSelect:number = 0;
  sizeItemSelect:string;
  stockProduct:number = 10

  constructor(private _route: ActivatedRoute, 
    private _firebaseProductService: FirestoreService ) {
    this.productId= this._route.snapshot.paramMap.get("productId");
    console.log("PROD ID : ", this.productId);
    
   }

  ngOnInit() {
    this._firebaseProductService.getClothingDetail(this.productId).subscribe(
      response => {
        console.log(response);
        
        this.productSelected = response;
        this.imageProduct= response.images[0]
        
      },
      error => {
        console.log("ERROR detail product : ", error);
        
      }
    )
  }

  eventGetProductById = ( ) => {

  }

  eventSelectSizeItem = (size : string) => {
    this.sizeItemSelect = size;
    console.log("SIZE SELECT : ", size);
    
  }

  eventRemoveItems = () => {
    console.log("REMOVE ITEMS :", this.cantItemSelect);
    
    this.cantItemSelect>0 ? this.cantItemSelect-- : null;
  }

  eventAddItems = () => {
    console.log("ADD ITEMS : ", this.cantItemSelect);
    
    this.cantItemSelect<this.stockProduct ? this.cantItemSelect++ : null;
  }

  eventAddItemToShoppingBag = () => {
    let productShoppingBag = this.productSelected
  }

}
