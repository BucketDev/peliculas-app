import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signWithGoogle = () => {
    this.auth.googleLogin();
  }

}
