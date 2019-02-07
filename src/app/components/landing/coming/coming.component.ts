import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/providers/movie.service';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-coming',
  templateUrl: './coming.component.html',
  styles: []
})
export class ComingComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.movieService.getComingMovies().subscribe((movies: Movie[]) => this.movies = movies);
  }

  ngOnInit() {
  }

}
