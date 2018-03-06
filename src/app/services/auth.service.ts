import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: string
  user: any
  base: string = 'http://www.travelcatalog.me/api/'

  constructor(private http: Http) { }
  // Admin Login

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  isLoggedIn() {
    this.loadToken();
    return tokenNotExpired();
  }

  login(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + "auth/admin/login"
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
}
