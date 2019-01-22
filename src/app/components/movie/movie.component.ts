import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  getProgressBg = (average: number) => {
    return average >= 75 ? 'bg-success' : (average >= 50 ? 'bg-warning' : 'bg-danger');
  }

}
