import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MainWebModule} from './components/main-web/main-web.module';
import {BaseService} from './services/base.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MainWebModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
