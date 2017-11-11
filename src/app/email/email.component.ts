import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public authService: AuthService, public router: Router) {  
    this.checkAuthentication();
  }

  ngOnInit() {
  }

  checkAuthentication(){
    if(this.authService.checkAuthetication){
      this.router.navigate(['']);
    }
  }

  // onSubmit(formData) {
  //   if(formData.valid) {
  //     console.log(formData.value);
  //     this.authService.loginWithEmailAndPassword(formData)
  //    .then(
  //       (success) => {
  //       console.log(success);
  //       this.router.navigate(['']);
  //     }).catch(
  //       (err) => {
  //       console.log(err);
  //       this.error = err;
  //     })
  //   }
  // }

}
