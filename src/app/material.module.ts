import {NgModule} from '@angular/core';

import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule
  ]
})
export class MaterialModule {
}
