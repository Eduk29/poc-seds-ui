import { SedsMastheadModule } from '../../components/seds-masthead/seds-masthead.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SedsButtonShowcaseComponent } from './seds-button-showcase.component';

@NgModule({
  declarations: [
    SedsButtonShowcaseComponent
  ],
  imports: [
    CommonModule,
    SedsMastheadModule
  ]
})
export class SedsMastheadShowcaseModule { }
