import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoadingComponent } from './loading/loading.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    NavbarComponent,
    CarouselComponent,
    LoadingComponent,
    UploadComponent,
    CategoryComponent
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    LoadingComponent,
    UploadComponent,
    CategoryComponent
  ]
})
export class SharedModule { }
