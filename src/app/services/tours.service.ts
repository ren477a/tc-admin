import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ToursService {

  base: String = 'http://travelcatalog.me/api/'

  constructor(private http: Http) {
  }


  // Approve registration
  approve(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.base + 'tours/' + id
    return this.http.put(ep, { status: 'onsale' }, { headers: headers })
      .map(res => res.json());
  }

  // CRUD
  create(tour) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.base + 'tours'
    return this.http.post(ep, tour, { headers: headers })
      .map(res => res.json());
  }

  read(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.base + 'tours/' + id
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  readAll() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.base + 'tours'
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  delete(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.base + 'tours/' + id
    return this.http.delete(ep, { headers: headers })
      .map(res => res.json());
  }

  // CRUD
  // Approve Listing

}
