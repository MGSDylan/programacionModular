import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService:TokenService,private authService:AuthService,private router:Router){
  }
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user=null;
      this.authService.myUser$.subscribe(u=>
        {
          user=u  
        });
      if (this.tokenService.getToken() && user) {
        return true;
      }
      this.router.navigate(['/home'])
    return false;
  }
  
}
