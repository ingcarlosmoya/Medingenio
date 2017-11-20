import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AuthService } from './providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth'

import{NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


//Public Component
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ResetPasswordComponent } from './public/reset-password/reset-password.component';

//Secure Component
import { HomeComponent } from './secure/home/home.component';

//Layout
import { SecureComponent } from './layout/secure/secure.component';
import { PublicComponent } from './layout/public/public.component';


// Common
import { AuthGuard } from './../common/auth.guard';

export const firebaseConfig = {
  apiKey: "AIzaSyBtgYaZKcddc5Xsai6Et1V-drVJXNuOobo",
  authDomain: "medingenio-web.firebaseapp.com",
  databaseURL: "https://medingenio-web.firebaseio.com",
  projectId: "medingenio-web",
  storageBucket: "medingenio-web.appspot.com",
  messagingSenderId: "1038983178123"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    SecureComponent,
    PublicComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
