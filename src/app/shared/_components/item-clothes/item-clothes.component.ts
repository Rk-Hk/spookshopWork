import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataClothe } from '../../_models/clothes.interface';

@Component({
  selector: 'app-item-clothes',
  templateUrl: './item-clothes.component.html',
  styleUrls: ['./item-clothes.component.scss']
})
export class ItemClothesComponent implements OnInit {

  @Input() itemClothes: IDataClothe

  constructor(
    private _router : Router
  ) { }

  ngOnInit() {
  }

  redirectToProductDetail = () => {
    this._router.navigate(['/product' , this.itemClothes.id])
  }

}
