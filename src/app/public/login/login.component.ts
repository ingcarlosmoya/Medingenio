import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
// import { Component, ViewChild } from '@angular/core';

import { AuthService } from './../../providers/auth.service';
import { AppValidationMessages } from './../../app-validation-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(public authService: AuthService, private router: Router) {
    this.checkAuthentication();
  }

  ngOnInit() {
  }

  checkAuthentication() {
    if (this.authService.checkAuthetication()) {
      this.router.navigate(['members']);
    }
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook().then((auth) => {
      this.router.navigate(['']);
    }).catch((err) => {
      this.authService.validateError(err);
    });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((auth) => {
      this.router.navigate(['']);
    }).catch((err) => {
      this.authService.validateError(err);
    });
  }

  onFocusInput(){
    this.error = "";
  }

  onSubmit(loginForm) {
    if (loginForm.valid) {
      this.authService.loginWithEmailAndPassword(loginForm.value.email, loginForm.value.password)
        .then(
        (success) => {
          this.router.navigate(['/home']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = this.authService.validateError(err);
        })
    }
  }

  resetPassword(){
    this.router.navigate(['reset-password'])
  }
}
