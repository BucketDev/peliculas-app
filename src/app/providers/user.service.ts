import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  getUser = (uid: string) => this.afs.collection('users').doc(uid).get();

  getLikedMovies = (uid: string) => this.afs.collection('users').doc(uid).collection('likedMovies').get();

}
