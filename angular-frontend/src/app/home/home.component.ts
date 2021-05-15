// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocialAuthService} from 'angularx-social-login';
import {SocialUser, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("home init");
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    if(this.user){
      localStorage.setItem("loggedin", "true");
    }
    else{
      localStorage.setItem("loggedin", "false");
    }
    console.log(this.user);
    console.log(localStorage.getItem("loggedin"))
  }

  SignInWithGoogle(): void {
    console.log("sign in clicked");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
      if(userData.idToken){
        localStorage.setItem("currentUser", userData.email);
        console.log(localStorage.getItem("currentUser"));
        localStorage.setItem("loggedin", "true");
        this.router.navigate(['/opportunities']);
      }
    });
  }

  SignOut(): void {
    console.log("sign out clicked")
    this.authService.signOut();
    localStorage.setItem("loggedin", "false");
  }
}
