import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends BaseService {

  constructor(endpoint = 'items',
              http: HttpClient) {
    super(endpoint, http);
  }
}
