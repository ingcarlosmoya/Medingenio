import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../providers/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.auth.logout();
  }

}
