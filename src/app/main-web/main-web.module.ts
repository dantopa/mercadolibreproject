import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ItemsService} from '../services/items.service';
import {ResultsComponent} from './results/results.component';
import {DetailComponent} from './detail/detail.component';
import {MainWebComponent} from './main-web.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchBarComponent,
    ResultsComponent,
    DetailComponent,

  ],
  providers: [

  ]
})
export class MainWebModule { }
