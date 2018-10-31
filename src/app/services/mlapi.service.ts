import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MLAPIService {

  url = 'https://api.mercadolibre.com';
  constructor(private http: HttpClient) {}

  searchQuery(query) {
    const endpoint = '/sites/MLA/search?q=:';
    this.http.get(this.url + endpoint + query).subscribe(
      res => {
        console.log(res);
      },
      error1 => {
        console.log(error1);
      }
    );
  }
}
