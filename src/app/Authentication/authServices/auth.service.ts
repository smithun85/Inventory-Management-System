import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LOGIN, USER } from '../models/auth.interface';

@Injectable({providedIn:'root'})



export class AuthService{
    public url:string = 'http://localhost:3000';

    private _token:string='';
    public get token(){
        return this._token
    };

    public set token(myToken:string){
         this._token = myToken
    }

    constructor(private http:HttpClient){}
    //login
    login(input:LOGIN){
        return this.http.post(`${this.url}/login`,input)
    };

    //   //signup
    //   signup(input:any){
    //     return this.http.post(`${this.url}/signup`,input)
    // };

    //get User:
    getUser(){
        let headers={
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('myToken')  
            }
        }
        return this.http.get(`${this.url}/get-profile`,headers)
    };
    

}