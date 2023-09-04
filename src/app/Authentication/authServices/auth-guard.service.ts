import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthService, public router: Router, private loaderService:LoaderService) {}
  
  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
        this.authService.getUser().subscribe(
            res=>{
              // console.log(res);
            },
          
            error=>{
              this.showLoader()
              this.authService.doLogout()
              this.router.navigate(['login']);
              this.hideLoader();
            }
            
        )
    if (this.authService.isLoggedIn !== true) {
      this.showLoader()
      window.alert('Access not allowed!');
      this.authService.doLogout()
      this.router.navigate(['']);
      this.hideLoader();
      return false;
    }
    return true;
  }
  //OR 
//   const isAuthorize:boolean = this.authService.getToken() ? true :false;
//   if(!isAuthorize){
//     this.router.navigate([''])
//   }
//   return isAuthorize
// };
}