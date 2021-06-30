import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IDataClothe } from 'src/app/shared/_models/clothes.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public registerClouthing = (clothing: IDataClothe) => {
    return this.firestore.collection('clothes').add(clothing)
  }

  // //Crea un nuevo gato
  // public createCat(data: {nombre: string, url: string}) {
  //   return this.firestore.collection('cats').add(data);
  // }
  // //Obtiene un gato
  // public getCat(documentId: string) {
  //   return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  // }
  // //Obtiene todos los gatos
  // public getCats() {
  //   return this.firestore.collection('cats').snapshotChanges();
  // }
  // //Actualiza un gato
  // public updateCat(documentId: string, data: any) {
  //   return this.firestore.collection('cats').doc(documentId).set(data);
  // }

  /**
   * Funcion encargada de traer la informacion de UNA PRENDA.
   * @param documentId: Representa el id de la prenda a buscar 
   */
  public getClothingDetail = (documentId: string) => {
    
    return this.firestore.collection('clothes').doc(documentId).snapshotChanges().pipe(
      map( (clotheSnapshot:any) => {
        return clotheSnapshot.payload.data();
      })
    );
  }

  /**
   * Funcion que traera todas las prendas.
   */
  public getAllClothesDetail = () => {
    return this.firestore.collection('clothes').snapshotChanges().pipe(
      map((clothesSnapshot:Array<any>) => {
        console.log("CLOTHES : ", clothesSnapshot);
        
        let resultClothes =[];
        clothesSnapshot.forEach( (clothingItem: any) => {
          let data =  clothingItem.payload.doc.data();
          data.id = clothingItem.payload.doc.id;
          resultClothes.push(data);
        })
        return resultClothes
      })
    );
  }
}
