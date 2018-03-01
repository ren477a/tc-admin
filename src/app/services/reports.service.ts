import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportsService {

  base: String = 'http://www.travelcatalog.me/api/'

  constructor(private http: Http) { 
  }

  dailySales(data) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'reports/dailysales'
    return this.http.post(ep, data, {headers: headers})
      .map(res => res.json());
  }

  monthlySales(data) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.base + 'reports/monthlysales'
    return this.http.post(ep, data, {headers: headers})
      .map(res => res.json());
  }
}
