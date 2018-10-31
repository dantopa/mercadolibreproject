import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MLAPIService} from '../services/mlapi.service';
import { ResultsComponent } from './results/results.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchBarComponent,
    ResultsComponent,
    DetailComponent
  ],
  providers: [
    MLAPIService
  ]
})
export class MainWebModule { }
