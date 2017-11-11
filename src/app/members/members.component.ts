import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';

  constructor(public authService: AuthService, private router: Router) {
    // if(this.authService.checkAuthetication()){
    // this.name = this.authService.checkAuthetication().displayName;
  //}
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
 }


}
