import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
    SedsMastheadShowcaseModule
  ]
})
export class SedsShowcaseModule { }
