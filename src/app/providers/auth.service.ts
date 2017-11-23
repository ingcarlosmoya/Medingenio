import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}


@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, public router: Router) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      })

  }

  checkAuthetication() {
    if (this.afAuth.auth.currentUser) {
      console.log(this.afAuth.auth.currentUser);
      return true;
    }
    else {
      return false;
    }

  }

  createUser(formData: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      formData.value.email,
      formData.value.password);
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  ResetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data)
  }

  validateError(err: any) {
    if (err.code) {
      var errorCode = err.code.toString().toLowerCase();
      var errorMessage = ""
      console.log(errorCode);
      console.log(errorCode.search('OPERATION_NOT_ALLOWED'));
      if (errorCode == 'auth/operation-not-allowed') {
        errorMessage = "Existe un problema con la autorizacion. Por favor comuniquese con el administrador!"
      }
      else if (errorCode == 'auth/invalid-email') {
        errorMessage = "El correo electrónico ingresado no tiene el formato correcto!";
      }
      else if (errorCode == 'auth/popup-closed-by-user') {
        errorMessage = "";
      }
      else if(errorCode == 'auth/wrong-password'){
        errorMessage = "Contraseña invalida!"
      }
      else if (errorCode == 'auth/user-not-found') {
        errorMessage = "Este correo no esta autorizado, por favor verifiquelo de nuevo!"
      }
      else {
        errorMessage = "Error en la autorizacion";
      }
      return errorMessage;
    }
  }

}
