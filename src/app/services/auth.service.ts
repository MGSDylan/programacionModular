import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Auth } from './../models/auth.model';
import { User } from './../models/user.model';
import { TokenService } from './../services/token.service';
import { BehaviorSubject } from 'rxjs';
import { da, ta } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  private user$ = new BehaviorSubject<User | null>(null);

  myUser$ = this.user$.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => this.tokenService.saveToken(response.access_token))
      );
  }

  getProfile() {
    return this.http.get<User>(`${this.apiUrl}/profile`).pipe
      (
        tap (data => {
          this.user$.next(data);
        })
      );
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.getProfile()),
      )
  }

  logOut() {
    this.tokenService.removeToken();
    location.reload();
  }

}
