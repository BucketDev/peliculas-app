import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../providers/movie.service';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.movieService.getCarouselMovies().subscribe((movies: Movie[]) => this.movies = movies);
  }

  ngOnInit() {

  }

}
