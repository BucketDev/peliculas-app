import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from '../interfaces/tag.interface';
import { TagService } from '../providers/tag.service';

@Pipe({
  name: 'movieTags'
})
export class MovieTagsPipe implements PipeTransform {

  constructor(private tagService: TagService) { }

  transform(tagIds: number[], args?: any): any {
    let stringTags = [];
    if(tagIds){
      this.tagService.getTags().subscribe((tags: Tag[]) => {
        tagIds.forEach(tagId =>{
          let tag = tags.find(tag => tag.id === tagId.toString())
          if (tag)
            stringTags.push(tag.name);
        })
      });
    }
    return stringTags;
  }

}
