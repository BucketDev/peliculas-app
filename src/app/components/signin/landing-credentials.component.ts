import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-landing-credentials',
  templateUrl: './landing-credentials.component.html',
  styles: []
})
export class LandingCredentialsComponent implements OnInit {

  faGoogle = faGoogle;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signWithGoogle = () => {
    this.auth.googleLogin();
  }

}
