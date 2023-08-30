import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router }    from '@angular/router';
// import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn:'root'})
export class AuthGaurdService implements CanActivate{
    
    constructor(private auth:AuthService,private router:Router){};

    canActivate():Promise<boolean> | boolean{
        // will check if user having the login session in the storage or not
        const isAutherize:boolean = this.auth.token ? true : false ;
        if(!isAutherize){
            this.router.navigate(['']);
        }
        return isAutherize
    };
    
}