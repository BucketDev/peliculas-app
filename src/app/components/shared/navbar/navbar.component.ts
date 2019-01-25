import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;

  ngOnInit(): void {

  }

  constructor(private auth: AuthService) {
  }

  logOut = () => {
    this.auth.logout();
  }

}
