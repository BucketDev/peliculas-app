import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    CarouselComponent,
    LoadingComponent
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
