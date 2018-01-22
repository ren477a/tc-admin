import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CashoutsService {

  base: String = 'http://travelcatalog.me/api/'

  constructor(private http: Http) { 
  }


  // Process cashout
  process(id, status, msg) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashouts/' + id
    return this.http.put(ep, {status: status, msg: msg}, {headers: headers})
      .map(res => res.json());
  }

  // CRUD
  create(cashout) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashouts'
    return this.http.post(ep, cashout, {headers: headers})
      .map(res => res.json());
  }

  read(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashouts/' + id
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  readAll() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashouts'
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  delete(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashouts/' + id
    return this.http.delete(ep, {headers: headers})
      .map(res => res.json());
  }
  // CRUD
  // Process cashout
  
}
