import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../../../services/items.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormControl = new FormControl();

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {

  }

  search() {
    console.log(this.searchForm.value);
    if (this.searchForm.value) {
      this.itemsService.search(this.searchForm.value).subscribe(
        res => {
          console.log(res);
        },
        error1 => {
          console.log(error1);
        }
      );
    }
  }

}
