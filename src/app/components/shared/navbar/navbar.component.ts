import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { PeliUser } from 'src/app/interfaces/peli-user.interface';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  peliUser: PeliUser;

  ngOnInit(): void {
    
  }

  constructor(private auth: AuthService) {
  }

  googleSignIn = () => {
    console.log("googleSignIn");
  }

  getPeliUser = () => {
  }

}
