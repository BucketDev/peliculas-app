import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { PeliUser } from '../interfaces/peli-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

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
