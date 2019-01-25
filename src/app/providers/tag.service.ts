import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/tag.interface';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TagService {

  tagCollection: AngularFirestoreCollection<Tag>;

  constructor(private afs: AngularFirestore) {
    this.tagCollection = this.afs.collection("tags");
  }

  getTags = () => {
    return this.tagCollection.snapshotChanges().pipe(map((actions: DocumentChangeAction<Tag>[]) => {
      return actions.map((action: DocumentChangeAction<Tag>) => {
        let tag = action.payload.doc.data();
        tag.id = action.payload.doc.id;
        return tag;
      })
    }));
  };
}
