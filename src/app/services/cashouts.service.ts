import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CashoutsService {

  base: String = 'http://www.travelcatalog.me/api/'

  constructor(private http: Http) { 
  }


  // Process cashout
  process(id, msg) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashout/' + id
    return this.http.put(ep, {status: 'processed', msg: msg, dateProcessed: Date.now()}, {headers: headers})
      .map(res => res.json());
  }

  // CRUD
  create(cashout) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashout'
    return this.http.post(ep, cashout, {headers: headers})
      .map(res => res.json());
  }

  read(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashout/' + id
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  readAll(page) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashout?page=' + page
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  readPending() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashout?status=pending'
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  delete(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'cashout/' + id
    return this.http.delete(ep, {headers: headers})
      .map(res => res.json());
  }
  // CRUD
  // Process cashout
  
}
