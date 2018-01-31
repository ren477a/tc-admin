import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AgenciesService {

  base: String = 'http://www.travelcatalog.me/api/'

  constructor(private http: Http) { 
  }


  // Approve registration
  approve(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'agencies/' + id
    return this.http.put(ep, {status: 'active'}, {headers: headers})
      .map(res => res.json());
  }

  // CRUD
  create(agency) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'agencies'
    return this.http.post(ep, agency, {headers: headers})
      .map(res => res.json());
  }

  read(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'agencies/' + id
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  readAll(page) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'agencies?page=' + page
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  readPending() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'agencies?status=pending'
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  delete(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'agencies/' + id
    return this.http.delete(ep, {headers: headers})
      .map(res => res.json());
  }

}
