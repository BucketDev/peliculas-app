import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {}

  constructor() {}

  googleSignIn = () => {
    console.log("googleSignIn");
  }

}
