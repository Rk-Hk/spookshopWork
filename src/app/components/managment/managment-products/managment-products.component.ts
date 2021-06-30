import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-managment-products',
  templateUrl: './managment-products.component.html',
  styleUrls: ['./managment-products.component.scss']
})
export class ManagmentProductsComponent implements OnInit {

  public formProduct: FormGroup;

  constructor( private _fireStore : FirestoreService) { }

  ngOnInit() {
    this.initFormProduct();
  }

  private initFormProduct = () => {
    this.formProduct = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'discount': new FormControl(null),
      'gender': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'type': new FormControl(null, [Validators.required]),
      'availableSizes': new FormControl(null, [Validators.required]),
      'images': new FormControl(null, [Validators.required]),
    })
  }

  private eventSaveClothingFirestore = () => {
    console.log(this.formProduct);
    this._fireStore.registerClouthing(this.formProduct.value).then( response => {
      console.log("RESPONSE SAVE : ", response);
      
    })
    
  }
}
