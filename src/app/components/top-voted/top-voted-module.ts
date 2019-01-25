import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MovieModule } from '../movie/movie.module';

import { TopVotedComponent } from './top-voted.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MovieModule
  ],
  declarations: [
    TopVotedComponent
  ],
  exports: []
})
export class TopVotedModule { }
