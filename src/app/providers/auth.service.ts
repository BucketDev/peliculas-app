import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User as FireBaseUser } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user: FireBaseUser) => console.log(user));
  }

  googleLogin = (): void => {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
