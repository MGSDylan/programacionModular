import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { firstValueFrom, map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private routes: Router) {

  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    try {
      const user: User | null = await firstValueFrom(this.authService.myUser$);

      if (user?.role === 'admin') {
        return true;
      } else {
        console.log('user', user);
        return this.routes.createUrlTree(['/unauthorized']); // Redirige correctamente
      }
    } catch (error) {
      console.log('Error obteniendo el usuario', error);
      return this.routes.createUrlTree(['/unauthorized']);
    }
  }



}
