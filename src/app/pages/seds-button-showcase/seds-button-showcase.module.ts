import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SedsButtonModule } from './../../components/seds-button/seds-button.module';
import { SedsButtonShowcaseComponent } from './seds-button-showcase.component';

@NgModule({
  declarations: [
    SedsButtonShowcaseComponent
  ],
  imports: [
    SedsButtonModule,
    CommonModule,
  ]
})
export class SedsButtonShowcaseModule { }
