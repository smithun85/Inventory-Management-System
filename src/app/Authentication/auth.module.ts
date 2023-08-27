import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { authRoutingModule } from './auth-routing';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    AuthLayoutComponent, 

  ],
  imports: [
    CommonModule,
    authRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
})
export class authModule { }

