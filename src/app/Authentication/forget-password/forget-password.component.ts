import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{

  title:string='Forget Password'
  forgetPasswordForm :FormGroup | any

  constructor(
    private router:Router,
    public bsModalRef: BsModalRef
  ){};

  ngOnInit(): void {
    this.forgetPasswordForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      newPassword:new FormControl('', [Validators.required,Validators.minLength(6)])
    })
  };

  get email(){
    return this.forgetPasswordForm.controls.email
  };
  get newPassword(){
    return this.forgetPasswordForm.controls.newPassword
  }

  gotoLogin(){
    this.router.navigate(['auth'])
  }

  onSubmit(){
    if(this.forgetPasswordForm.invalid){
      this.forgetPasswordForm.markAllAsTouched();
      return
    }
    console.log(this.forgetPasswordForm.value);
    const value = this.forgetPasswordForm.value
    this.router.navigate(['auth'])
    this.bsModalRef.hide()
  }
}
