import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../providers/movie.service';
import { Movie } from '../../../interfaces/movie.interface';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styles: []
})
export class AdminMoviesComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;

  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  getProgressBg = (average: number) => {
    return average >= 75 ? 'bg-success' : (average >= 50 ? 'bg-warning' : 'bg-danger');
  }

  deleteMovie = (movieId: string) => this.movieService.delete(movieId);

  ngOnInit() {
  }

}
