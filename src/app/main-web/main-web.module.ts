import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ResultsComponent} from './results/results.component';
import {DetailComponent} from './detail/detail.component';
import {MainWebComponent} from './main-web.component';
import {ItemsService} from '../services/items.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SearchBarComponent,
    ResultsComponent,
    DetailComponent,
    MainWebComponent
  ],
  exports: [
    MainWebComponent,
    SearchBarComponent
  ],
  providers: [ItemsService]
})
export class MainWebModule {
}
