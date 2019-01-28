import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../providers/auth.service';

import { Review } from '../../interfaces/review.interface';
import { PeliUser } from '../../interfaces/peli-user.interface';

import { faPenFancy, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../providers/user.service';
import { DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  faPenFancy = faPenFancy;
  faHeart = faHeart;

  user: PeliUser;
  reviews: Review[];

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params['uid']).subscribe((user: DocumentSnapshot<PeliUser>) => {
        this.user = user.data();
      })
    });
  }

  ngOnInit() {
  }

}
