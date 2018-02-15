import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionsService {

  base: String = 'http://www.travelcatalog.me/api/'

  constructor(private http: Http) { 
  }

  // CRUD
  create(transaction) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'transactions'
    return this.http.post(ep, transaction, {headers: headers})
      .map(res => res.json());
  }

  read(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'transactions/' + id
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  readAll() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'transactions'
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  delete(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'transactions/' + id
    return this.http.delete(ep, {headers: headers})
      .map(res => res.json());
  }
  // CRUD
}
