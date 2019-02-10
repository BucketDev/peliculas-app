import { Component, OnInit } from '@angular/core';
import { PeliUser } from '../../interfaces/peli-user.interface';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

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

  logIn = () => {
    this.auth.emailLogIn(this.peliUser).catch(error => console.log(error));
  }

}
