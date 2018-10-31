import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface Header {
  headers: HttpHeaders;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseUrl = 'http://localhost:8000/api/';
  url: string;

  constructor(private endpoint,
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

  getCollection() {
    return this.http.get(this.url, this.getHeader());
  }

  get(id: number) {
    return this.http.get(this.url + id, this.getHeader());
  }

  search(query: any) {
    return this.http.get(this.url + 'q?=' + query, this.getHeader());
  }
}
