import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ResultsComponent} from './results/results.component';
import {DetailComponent} from './detail/detail.component';
import {MainWebComponent} from './main-web.component';
import {HttpClientModule} from '@angular/common/http';
import {ItemsService} from '../../services/items.service';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
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
