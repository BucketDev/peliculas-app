import { Score } from './score.interface';
import { Review } from './review.interface';
export interface Movie {
  id?: string,
  average?: number,
  likes?: number,
  name: string,
  premiere: any,
  score?: Score[],
  reviews?: Review[],
  summary: string,
  tags?: number[],
  photoUrl: string,
  youtubeCode: string
}
