import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth'

import{NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AngularFireModule} from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBtgYaZKcddc5Xsai6Et1V-drVJXNuOobo",
  authDomain: "medingenio-web.firebaseapp.com",
  databaseURL: "https://medingenio-web.firebaseio.com",
  projectId: "medingenio-web",
  storageBucket: "medingenio-web.appspot.com",
  messagingSenderId: "1038983178123"
}

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
