import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SedsMastheadComponent } from './seds-masthead.component';

@NgModule({
  declarations: [
    SedsMastheadComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SedsMastheadComponent
  ]
})
export class SedsMastheadModule { }
