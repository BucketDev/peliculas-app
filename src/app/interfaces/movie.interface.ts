import { Revision } from './revision.interface';
import { DocumentReference } from '@angular/fire/firestore';
export interface Movie {
  id: string,
  average: number,
  likes: number,
  name: string,
  premiere: any,
  revisions: Revision[],
  sumary: string,
  tags: DocumentReference[],
  photoUrl: string
}
