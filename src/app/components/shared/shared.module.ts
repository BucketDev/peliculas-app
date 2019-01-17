import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SigninButtonComponent } from './navbar/signin-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    CarouselComponent,
    SigninButtonComponent
  ],
  exports: [
    NavbarComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
