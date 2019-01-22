import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import {formatDate} from '@angular/common';
import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

@Pipe({
  name: 'movieDate'
})
export class MovieDatePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string){}

  transform(value: Timestamp, format?: any): any {
    return formatDate(value.toDate(), format || 'mediumDate', this.locale);
  }

}
