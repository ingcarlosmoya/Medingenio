import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

canActivate(){
  console.log('it is here')
  if(this.checkAuthetication()){
    this.router.navigate(['login']);
  }
  else{
    this.router.navigate(['members']);
  }
}

  checkAuthetication(){
    return this.afAuth.auth.currentUser;
  }

  createUser(formData:any){
    return this.afAuth.auth.createUserWithEmailAndPassword(
      formData.value.email,
      formData.value.password);
  }

  loginWithEmailAndPassword(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithFacebook(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
   return this.afAuth.auth.signOut();
  }

  ResetPassword(email: string){
    return this.afAuth.auth.sendPasswordResetEmail(email);
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
      else if(errorCode == 'auth/invalid-email'){
        errorMessage = "El correo esta mal formateado!";
      }
      else if(errorCode == 'auth/popup-closed-by-user'){
        errorMessage = "";
      }
      else if(errorCode = 'auth/user-not-found'){
        errorMessage = "Este correo no esta autorizado, por favor verifiquelo de nuevo!"
      }
      else{
        errorMessage = "Error en la autorizacion";
      }
      return errorMessage;
    }
  }

}
