import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth'

import{NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AngularFireModule} from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBtgYaZKcddc5Xsai6Et1V-drVJXNuOobo",
  authDomain: "medingenio-web.firebaseapp.com",
  databaseURL: "https://medingenio-web.firebaseio.com",
  projectId: "medingenio-web",
  storageBucket: "medingenio-web.appspot.com",
  messagingSenderId: "1038983178123"
}

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
