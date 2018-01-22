import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  base: String = 'http://travelcatalog.me/api/'

  constructor(private http: Http) { 
  }

  create(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'users'
    return this.http.post(ep, user, {headers: headers})
      .map(res => res.json());
  }

  read(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'users/' + id
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  readAll() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'users'
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  delete(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'users/' + id
    return this.http.delete(ep, {headers: headers})
      .map(res => res.json());
  }
}
