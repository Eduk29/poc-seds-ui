import { SedsMastheadModule } from './../../components/seds-masthead/seds-masthead.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SedsMastheadShowcaseComponent } from './seds-masthead-showcase.component';

@NgModule({
  declarations: [
    SedsMastheadShowcaseComponent
  ],
  imports: [
    CommonModule,
    SedsMastheadModule
  ]
})
export class SedsMastheadShowcaseModule { }
