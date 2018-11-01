import {Component, OnInit} from '@angular/core';
import {Product, ProductResults} from '../../../models/Product';
import {ItemsService} from '../../../services/items.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results: ProductResults;
  products: Product[];
  query: string;
  loading: boolean;

  constructor(private itemsService: ItemsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('en results');
    this.route.queryParams.subscribe(
      params => {
        this.query = params['search'];
        this.search(this.query);
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
        console.log("resultados");
        console.log(this.results);
        this.loading = false;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
