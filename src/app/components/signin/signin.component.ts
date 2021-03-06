import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { PeliUser } from '../../interfaces/peli-user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  peliUser: PeliUser;

  constructor(private auth: AuthService) {
    this.peliUser = {
      uid: '',
      displayName: '',
      email: '',
      password: '',
      admin: false
    }
  }

  ngOnInit() {
  }

  signIn = () => {
    this.auth.emailSignIn(this.peliUser).catch(error => console.log(error));
  }

}
