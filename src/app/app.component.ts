import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _isLoggedIn: Boolean;
  private _userDisplayName: String;
  private _userEmail: String;
  title = 'app';
  constructor(public authService: AuthService, private router: Router){
    this.authService.afAuth.authState.subscribe((auth) => {
      if(auth == null){
        this._isLoggedIn = false;
        this._userDisplayName = '';
        this._userEmail = '';
        this.router.navigate(['login']);
      }
      else{
        this._isLoggedIn = true;
        this._userDisplayName = auth.displayName;
        this._userEmail = auth.email;
        this.router.navigate(['']);
      }

      // console.log(this._isLoggedIn);
      // console.log(this._userDisplayName);
      // console.log(this._userEmail);
    })
  }
}
