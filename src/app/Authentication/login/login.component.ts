import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { AuthService } from '../authServices/auth.service';
import { LOGIN } from '../models/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title:string = 'Login'
  loginForm:FormGroup | any;
  sending:boolean = false

  apiRes:any={}

 constructor(
  private router:Router,
  public bsModalRef: BsModalRef,
  private modalService: BsModalService,
  private auth:AuthService
 ){};

 ngOnInit(): void {
   this.loginForm = new FormGroup({
    username:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required,Validators.minLength(6)])
   });
 };

 get login(){
  return this.loginForm.controls
 };

postLoginForm(loginForm:any){
  
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched()
    return 
  };
  this.sending = true;
  console.log('username:',this.loginForm.value);

 
  setTimeout(()=>{
    this.auth.login(loginForm.value)
    .subscribe( (apiRes)=>{
      console.log(apiRes);
      this.apiRes = apiRes
      console.log(this.apiRes.response, this.apiRes.id);

      if(this.apiRes.token){
        this.auth.token = this.apiRes.token        //set the token
        localStorage.setItem('myToken',this.apiRes.token)
        this.router.navigate(['/home/dashboard'])
      }
    })
  
    
    this.sending = false;
  },300)
 }

}
