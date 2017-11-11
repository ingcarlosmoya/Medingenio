import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  error: string;
  alertClass: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  GoBackToLogin() {
    this.router.navigate(['']);
  }

  onSubmit(resetPasswordForm) {
    if (resetPasswordForm.valid) {
      console.log(resetPasswordForm.value.email);
      this.authService.ResetPassword(resetPasswordForm.value.email)
        .then((success => {
        this.error = "Se ha enviado un correo para reestablecer su contraseña, por favor verifiquelo!";
        this.alertClass = "alert-success";
        })).catch((error => {
          this.error = this.authService.validateError(error);
          this.alertClass = "alert-danger";
        }))
    }
  }
}
