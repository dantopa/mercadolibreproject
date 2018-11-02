import {Component, OnInit} from '@angular/core';
import {Product, ProductResults} from '../../../models/Product';
import {ItemsService} from '../../../services/items.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results: ProductResults;
  products: Product[];
  query: string;
  loading = false;
  errorMsg = '';

  constructor(private itemsService: ItemsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.errorMsg = '';
        this.query = params['search'];
        if (!isNullOrUndefined(this.query)) {
          this.search(this.query);
        } else {
          this.errorMsg = 'Debe buscar algo primero.';
        }
      },
      error1 => {
        console.log(error1);
      });
  }

  search(query) {
    this.loading = true;
    this.itemsService.searchProducts(query).subscribe(
      res => {
        this.results = res;
        this.products = res.items;
        this.loading = false;
      },
      error1 => {
        this.errorMsg = 'Error al buscar los datos.';
        console.log(error1);
      }
    );
  }

}
