import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {ProductDetailResult, ProductResults} from '../models/Product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends BaseService {

  static endpoint = 'items';
  constructor(http: HttpClient) {
    super(ItemsService.endpoint, http);
  }

  getProductDetails(id: string): Observable<ProductDetailResult> {
    return this.get(id);
  }
  searchProducts(query): Observable<ProductResults> {
    return this.search(query);
  }
}
