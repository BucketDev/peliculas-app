import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { PeliUser } from '../interfaces/peli-user.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private af: AngularFireAuth) { }

  canActivate(): Observable<boolean> | boolean {
    return true;
    // return this.authService.peliUser$.pipe(
    //   take(1),
    //   map((user: PeliUser) => user && user.admin),
    //   tap(isAdmin => {
    //     if (!isAdmin) {
    //       console.error('Access denied - Admins only')
    //     }
    //   })
    // );
  }

}
