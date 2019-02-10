import { Routes } from '@angular/router';
import { SigninComponent } from './signin.component';
import { LoginComponent } from './login.component';

export const SIGNIN_ROUTES: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'signin' }
];
