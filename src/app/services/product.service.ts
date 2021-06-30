import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categorySelected: BehaviorSubject<string> = new BehaviorSubject<string>('TIENDA ONLINE');
  $categorySelected: Observable<any> = this.categorySelected.asObservable();


  private listProducts: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  $listProducts : Observable<any> = this.listProducts.asObservable();

  constructor(
    private _http: HttpClient
  ) { }


  spreadCategorySelected = (categorySelected: string) => {
    //Guardar en memoria para cuando recarguen la pagina
    this.categorySelected.next(categorySelected);
  }

  getListProducts = () : Observable<any> => {
    return this._http.get("assets/Mocks/products.mock.json").pipe();
  }
}
