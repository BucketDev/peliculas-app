import { Component, OnInit } from '@angular/core';
import { TagService } from '../../providers/tag.service';
import { MovieService } from '../../providers/movie.service';
import { Tag } from 'src/app/interfaces/tag.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
declare var $ :any;

@Component({
  selector: 'app-top-voted',
  templateUrl: './top-voted.component.html',
  styles: []
})
export class TopVotedComponent implements OnInit {

  tags: Tag[];
  movies: Movie[];

  constructor(private tagService: TagService,
              private movieService: MovieService) {
    this.tagService.getTags().subscribe((data: Tag[]) => {
      this.tags = data;
    });
    this.movieService.getTopVoted().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }

  tagSelected = (event: MouseEvent) => {
    console.log((<HTMLInputElement>event.target).checked);
  }

  ngOnInit() {
  }

}
