import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ItemsService} from '../../../services/items.service';
import {FormControl} from '@angular/forms';
import {Product, ProductResults} from '../../../models/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output()
  resultsEvent = new EventEmitter<Product[]>();

  searchForm: FormControl = new FormControl();
  results: ProductResults;

  constructor(private itemsService: ItemsService,
              private router: Router) {
  }

  ngOnInit() {

  }

  goResults() {
    if (this.searchForm.value) {
      const query = this.searchForm.value;
      this.router.navigate(['items'], {queryParams: {search: query}})
        .catch(
          error1 => console.log(error1)
        );
    }
  }

}
