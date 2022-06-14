import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SedsShowcaseRoutingModule } from './seds-showcase-routing.module';
import { SedsShowcaseComponent } from './seds-showcase.component';

@NgModule({
  declarations: [
    SedsShowcaseComponent
  ],
  imports: [
    CommonModule,
    SedsShowcaseRoutingModule
  ]
})
export class SedsShowcaseModule { }
