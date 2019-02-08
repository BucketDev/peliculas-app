import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieModule } from '../movie/movie.module';

import { LandingComponent } from './landing.component';
import { ComingComponent } from './coming/coming.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MovieModule
  ],
  declarations: [
    LandingComponent,
    ComingComponent
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
