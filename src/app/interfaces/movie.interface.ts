import { Score } from './score.interface';
import { Review } from './review.interface';
import { DocumentReference } from '@angular/fire/firestore';
import { Tag } from './tag.interface';
export interface Movie {
  id: string,
  average: number,
  likes: number,
  name: string,
  premiere: any,
  score: Score[],
  reviews: Review[],
  sumary: string,
  tags: DocumentReference[],
  peliTags: Tag[],
  photoUrl: string,
  youtubeCode: string
}
