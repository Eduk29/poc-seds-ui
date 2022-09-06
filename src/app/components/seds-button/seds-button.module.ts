import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { SedsButtonComponent } from './seds-button.component';

@NgModule({
  declarations: [
    SedsButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    SedsButtonComponent
  ]
})
export class SedsButtonModule { }
