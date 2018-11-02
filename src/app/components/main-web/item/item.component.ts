import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(id: string) {
    this.router.navigate(['items', id])
      .catch(
        error1 => console.log(error1)
      );
  }

}
