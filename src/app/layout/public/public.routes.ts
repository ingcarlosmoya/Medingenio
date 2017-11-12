import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../public/login/login.component';
import { ResetPasswordComponent } from '../../public/reset-password/reset-password.component';



export const PUBLIC_ROUTES: Routes = [
     { path: '', component: LoginComponent }
    ,{ path: 'login', component: LoginComponent }
    ,{ path: 'reset-password', component: ResetPasswordComponent }
]
