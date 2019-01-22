import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieModule } from '../movie/movie.module';

import { TopVotedComponent } from './top-voted.component';

@NgModule({
  imports: [
    CommonModule,
    MovieModule
  ],
  declarations: [
    TopVotedComponent
  ],
  exports: []
})
export class TopVotedModule { }
