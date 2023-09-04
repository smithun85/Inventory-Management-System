import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { LOGIN, USER } from '../models/auth.interface';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { NotificationService } from 'src/app/shared/notification/notification.service';


@Injectable({providedIn:'root'})



export class AuthService{
    public url:string = 'http://localhost:3000';

    currentUser = {};

    private _token:string='';
    public get token(){
        return this._token
    };

    public set token(myToken:string){
         this._token = myToken
    };

    constructor(private http:HttpClient,
      public router: Router, 
      private loaderService:LoaderService,
    
      ){}
    //login
    login(input:LOGIN){
        return this.http.post(`${this.url}/login`,input)
        // .subscribe( (res:any)=>{
        //     localStorage.setItem('myToken',res.token);
        //     this.getUser().subscribe( (apiRes:any)=>{
        //         this.currentUser = apiRes;
        //         this.router.navigate(['dashboard'])
        //     })
        // })
    };

    private showLoader(): void {
      this.loaderService.show();
    }
  
    private hideLoader(): void {
      this.loaderService.hide();
    }

   getToken(){
    return localStorage.getItem('myToken')
   };

   get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('myToken');
    return authToken !== null ? true : false;
  };
  
  doLogout() {
    let removeToken = localStorage.removeItem('myToken');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

    //get User:
    getUser(){
        let headers={
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('myToken')
            }
        }
        this.showLoader()
        return this.http.get(`${this.url}/get-profile`,headers)
        .pipe(map( (res)=>{
          this.hideLoader()

            return res || {}
        })
        )
    };
    

    // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}