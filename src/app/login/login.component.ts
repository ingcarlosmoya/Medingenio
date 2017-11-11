import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';

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

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.loginWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(
        (success) => {
          this.router.navigate(['members']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = this.authService.validateError(err);
        })
    }
  }


  checkAuthentication() {
    console.log(this.authService.checkAuthetication());
    if (this.authService.checkAuthetication()) {
      console.log('fa');
      this.router.navigate(['members']);
    }
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook().then((auth) => {
      this.router.navigate(['']);
    }).catch((err) => {
      console.log(err);
      this.authService.validateError(err);
    });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((auth) => {
      this.router.navigate(['']);
    }).catch((err) => {
      console.log(err);
      this.authService.validateError(err);
    });
  }

  resetPassword(){
    this.router.navigate(['reset-password'])
  }

}
