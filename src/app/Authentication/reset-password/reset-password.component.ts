import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { customValidatorsService } from '../../shared/Form-validators/custom-validators.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm:FormGroup | any;
  title:string = 'Reset Password'

  constructor(
    private router:Router,
    // private passwordMismatch:customValidatorsService,
    public bsModalRef: BsModalRef
  ){};

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      email:new FormControl('', [Validators.required]),
      oldPassword:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
      confirm_Password:new FormControl('',[Validators.required])
    },
    // {validators:this.passwordMismatch.passwordMismatchValidator}
    )}

  get resetPassword(){
    return this.resetPasswordForm.controls
  }

  gotoLogin(){
    this.router.navigate(['auth'])
  };

  onSubmit(){
    if(this.resetPasswordForm.invalid){
      this.resetPasswordForm.markAllAsTouched();
      return;
    }
    console.log(this.resetPasswordForm.value);
    this.router.navigate(['auth'])
    this.bsModalRef.hide()
  }
}
