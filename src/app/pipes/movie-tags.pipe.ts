import { Pipe, PipeTransform } from '@angular/core';
import { DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { Tag } from '../interfaces/tag.interface';

@Pipe({
  name: 'movieTags'
})
export class MovieTagsPipe implements PipeTransform {

  transform(tagDocument: DocumentReference, args?: any): any {
    return tagDocument.get().then((tagDocument: DocumentSnapshot<Tag>) => {
      return tagDocument.data();
    });
  }

}
