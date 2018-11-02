import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductDetail, ProductDetailResult} from '../../../models/Product';
import {ItemsService} from '../../../services/items.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  result: ProductDetailResult;
  id: string;
  detail: ProductDetail;
  errorMsg: string;
  loading = false;

  constructor(private route: ActivatedRoute,
              private itemsService: ItemsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.errorMsg = '';
        this.loading = true;
        this.id = params['id'];
        this.getProductDetail(this.id);
      },
      error1 => {
        this.errorMsg = 'Error al obtener el id';
        console.log(error1);
      });
  }

  getProductDetail(id: string) {
    this.itemsService.getProductDetails(id).subscribe(
      res => {
        this.result = res;
        this.detail = this.result.item;
        this.loading = false;
      },
      error1 => {
        console.log(error1);
        this.loading = false;
        this.errorMsg = 'Error al intentar acceder al detalle';
      }
    );
  }

  getCondition(condition: string) {
    if (condition === 'new') {
      return 'Nuevo';
    } else if (condition === 'used') {
      return 'Usado';
    } else {
      return '-';
    }
  }

}
