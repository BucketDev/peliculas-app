import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from '../../interfaces/upload.interface';
import { UploadTask } from '@angular/fire/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private afs: AngularFireStorage) { }

  upload = (upload: Upload, path?: string): UploadTask => {
    path = path || 'images';
    let storageRef = this.afs.ref(path);
    return storageRef.child(upload.name).put(upload.file);
  }
}
