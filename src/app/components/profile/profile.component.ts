import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../providers/auth.service';

import { Review } from '../../interfaces/review.interface';
import { PeliUser } from '../../interfaces/peli-user.interface';

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../providers/user.service';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { faPenFancy, faHeart, faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  faPenFancy = faPenFancy;
  faHeart = faHeart;
  faEdit = faEdit;
  faSave = faSave;
  faBan = faBan;

  user: PeliUser;
  reviews: Review[];
  uploadingPhoto: boolean = false;
  updatingDisplayName: boolean = false;
  updatingAbout: boolean = false;
  canModify: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private auth: AuthService) {
    this.activatedRoute.params.subscribe(params =>
      this.auth.peliUser$.subscribe((peliUser: PeliUser) =>
        this.userService.getUser(params['uid']).subscribe((user: DocumentSnapshot<PeliUser>) => {
          this.user = user.data();
          this.canModify = this.user.uid === peliUser.uid;
        })
      )
    );
  }

  ngOnInit() {
  }

  showUpload = () => this.uploadingPhoto = true;

  showDisplayName = () => this.updatingDisplayName = true;

  cancelDisplayName = () => this.updatingDisplayName = false;

  showAbout = () => this.updatingAbout = true;

  cancelAbout = () => this.updatingAbout = false;

  photoUploaded = (photoUrl) => {
    this.user.photo = photoUrl;
    this.uploadingPhoto = false;
    this.userService.updatePhoto(this.user);
  };

  updateDisplayName = () => this.userService.updateDisplayName(this.user)
    .then(() => this.updatingDisplayName = false);

  updateAbout = () => this.userService.updateAbout(this.user)
    .then(() => this.updatingAbout = false);

}
