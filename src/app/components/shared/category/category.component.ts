import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../../../interfaces/tag.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})
export class CategoryComponent implements OnInit {

  @Input() tags: Tag[];
  @Output() tagSelected = new EventEmitter<HTMLInputElement>();

  constructor() { }

  ngOnInit() {
  }

  tagChecked = (check: HTMLInputElement) => this.tagSelected.emit(check);

}
