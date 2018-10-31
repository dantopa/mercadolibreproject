import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MainWebModule} from './main-web/main-web.module';
import {BaseService} from './services/base.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainWebModule
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
