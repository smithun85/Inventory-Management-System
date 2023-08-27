import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap/modal';
// import { customValidatorsService } from '../../shared/Form-validators/custom-validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

 
  signupForm:FormGroup | any
  passord_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/

  constructor(
    private router:Router,
    // private passwordMismatch:customValidatorsService,
    public bsModalRef: BsModalRef
  ){};

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName:new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]),
      lastName:new FormControl('', [
        Validators.required
      ]),
      email:new FormControl('',[
        Validators.required
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.pattern(this.passord_pattern)
      ]),
      confirm_Password:new FormControl('',[
        Validators.required
      ])
    },
    // {validators:this.passwordMismatch.passwordMismatchValidator}  
    );

   
  }

  get signup(){
    return this.signupForm.controls
    
  };

  // reset form
  resetForm(){
    this.signupForm.reset()
  }

  gotoLogin(){
    this.router.navigate(['auth'])
  }
  onSubmit(){
    console.log(this.signupForm.controls.password.errors);
    if(this.signupForm.invalid){
      this.signupForm.markAllAsTouched();
      return;
    }
    console.log(this.signupForm.value);
    const signup = this.signupForm.value;
    this.router.navigate(['auth'])
    // this.router.navigate(['dashboard'])
    this.bsModalRef.hide()
  }
}
