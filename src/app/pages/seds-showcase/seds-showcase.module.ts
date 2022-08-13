import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SedsButtonShowcaseModule } from '../seds-button-showcase/seds-button-showcase.module';

import { SedsMastheadShowcaseModule } from './../seds-masthead-showcase/seds-masthead-showcase.module';
import { SedsShowcaseRoutingModule } from './seds-showcase-routing.module';
import { SedsShowcaseComponent } from './seds-showcase.component';

@NgModule({
  declarations: [
    SedsShowcaseComponent
  ],
  imports: [
    CommonModule,
    SedsShowcaseRoutingModule,
    SedsMastheadShowcaseModule,
    SedsButtonShowcaseModule
  ]
})
export class SedsShowcaseModule { }
