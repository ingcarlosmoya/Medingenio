import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../providers/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  companyName: string;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.auth.getUser();
    this.auth.getCompany();
  }

  logOut() {
    this.auth.logout();
  }

}
