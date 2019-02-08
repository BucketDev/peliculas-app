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
  tagIds: number[] = [];

  constructor(private tagService: TagService,
              private movieService: MovieService) {
    this.tagService.getTags().subscribe((data: Tag[]) => {
      this.tags = data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    });
    this.getTopVoted();
  }

  getTopVoted = (tagId?: number) => this.movieService.getTopVoted(tagId).subscribe((data: Movie[]) => {
    this.movies = data;
  });

  tagSelected = (element: HTMLInputElement) => {
    let value = parseInt(element.value);
    Array.from(document.getElementsByClassName('custom-control-input'))
      .forEach((input: HTMLInputElement) => element !== input && (input.checked = false));
    element.checked ? this.getTopVoted(value) : this.getTopVoted();
  }

  ngOnInit() {
  }

}
