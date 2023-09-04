import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Authentication/authServices/auth.service';
import { USER } from 'src/app/Authentication/models/auth.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  public user:USER = { id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumer: ''};

    public isLoading:boolean = false

    constructor(private auth:AuthService){}

  ngOnInit(): void {
   setTimeout( ()=>{
    this.isLoading = true
    this.auth.getUser().subscribe( (res:any)=>{
      console.log(res);
      this.user = res
    })
   });
   this.isLoading = false
  }


}
