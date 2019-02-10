import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User as FireBaseUser } from 'firebase/app';
import { Router } from '@angular/router';
import { PeliUser } from '../interfaces/peli-user.interface';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  peliUserDocument: AngularFirestoreDocument<PeliUser>;
  peliUser: PeliUser = null;
  peliUser$: Observable<PeliUser>;
  peliUsersCollection: AngularFirestoreCollection<PeliUser> = this.afs.collection('users');

  constructor(public router: Router,
              private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {
    this.peliUser$ = this.afAuth.authState.pipe(switchMap(user => {
      if(user) {
        return this.peliUsersCollection.doc(user.uid).valueChanges();
      } else {
        return of(null);
      }
    }));

    this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if(user) {
        this.createUser(user);
        let route = this.router.url.startsWith('/landing')  ? '/' : this.router.url;
        this.router.navigate([route]);
      }
    });
  }

  createUser = (user: FireBaseUser): void => {
    this.peliUsersCollection.doc(user.uid).valueChanges().subscribe((data: PeliUser) => {
      if(!data) {
        //Adds the user
        this.peliUser = {
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
          admin: false
        };
        this.peliUsersCollection.doc(user.uid).set(this.peliUser);
      } else {
        //just adds a reference to the user
        this.peliUser = data;
      }
    });
  }

  googleLogin = (): void => {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()
      .setCustomParameters({
        prompt: 'select_account'
      })
    );
  }

  emailSignIn = (peliUser: PeliUser): Promise<void> =>
    this.afAuth.auth.createUserWithEmailAndPassword(peliUser.email, peliUser.password)
      .then(data => {
        if(data.additionalUserInfo.isNewUser) {
          delete peliUser.password;
          peliUser.uid = data.user.uid;
          this.peliUsersCollection.doc(data.user.uid).set(peliUser);
        }
      });

  emailLogIn = (peliUser: PeliUser): Promise<void> =>
    this.afAuth.auth.signInWithEmailAndPassword(peliUser.email, peliUser.password)
      .then(data => console.log(data));

  logout = (): void => {
    this.afAuth.auth.signOut();
    this.peliUser = null;
    this.router.navigate(['/']);
  }

}
