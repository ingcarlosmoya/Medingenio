import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public authService: AuthService, public router: Router) { 

  }

  ngOnInit() {
  }

  // onsubmit(formData){
  //   if(formData.valid) {
  //     console.log(formData.value);
  //     this.authService.createUser(formData)
  //     .then(
  //       (success) => {
  //       console.log(success);
  //       this.router.navigate([''])
  //     }).catch(
  //       (err) => {
  //       console.log(err);
  //       this.error = err;
  //     })
  //   }
  // }

}
