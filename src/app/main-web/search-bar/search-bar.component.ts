import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.search('caca').subscribe(
      res => {
        console.log(res);
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
