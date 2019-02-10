import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SigninComponent } from './signin.component';
import { LoginComponent } from './login.component';
import { LandingCredentialsComponent } from './landing-credentials.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    SigninComponent,
    LoginComponent,
    LandingCredentialsComponent
  ],
  exports: [
    SigninComponent,
    LoginComponent,
    LandingCredentialsComponent
  ]
})
export class SigninModule { }
