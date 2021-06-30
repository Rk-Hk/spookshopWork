import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit, OnDestroy {

  private categorySelected = "Tienda Online SPOOK";
  private subscribeCategorySelected: Subscription;
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.hearCategorySelected();
  }

  ngOnDestroy() {
    this.subscribeCategorySelected.unsubscribe()
  }

  hearCategorySelected = () => {
    this.subscribeCategorySelected= this._productService.$categorySelected.subscribe((response) => {
      console.log("RESPONSE :", response);
      this.categorySelected = response;
    });
  };
}
