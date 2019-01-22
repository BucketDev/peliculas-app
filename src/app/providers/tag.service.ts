import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/tag.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TagService {

  tagCollection: AngularFirestoreCollection<Tag>;

  constructor(private afs: AngularFirestore) {
    this.tagCollection = this.afs.collection("tags");
  }

  getTags = () => {
    return this.tagCollection.get();
  };
}
