import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth:AuthService,
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    const token = this.auth.getToken();
    // if(token){
    //     const cloned = req.clone({
    //         headers:req.headers.set("Authorization", "Bearer"+token)
    //     })
    //     return next.handle(cloned)
    // }else{
    //     return next.handle(req)
    // };

    req = req.clone({
        setHeaders:{
            Authorization:"Bearer " +token
        }
    })
    return next.handle(req)
   
  }
}