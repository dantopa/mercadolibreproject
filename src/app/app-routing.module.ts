import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainWebComponent} from './components/main-web/main-web.component';
import {ResultsComponent} from './components/main-web/results/results.component';
import {DetailComponent} from './components/main-web/detail/detail.component';

const routes: Routes = [
  { path: '', component: MainWebComponent },
  { path: 'items', component: ResultsComponent },
  { path: 'items/:id', component: DetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
