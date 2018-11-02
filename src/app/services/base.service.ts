import {Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Header {
  headers: HttpHeaders;
}

export class BaseService {

  baseUrl = 'http://localhost:8000/api/';
  url: string;

  constructor(@Optional() endpoint: string,
              private http: HttpClient) {
    this.url = this.baseUrl + endpoint;
  }

  getHeader(): Header {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  protected get(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id, this.getHeader());
  }

  protected search(query: any): Observable<any> {
    return this.http.get(this.url + '?q=' + query, this.getHeader());
  }
}
