import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';

import { Farmacia } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private firestore:Firestore) { }

    
}
