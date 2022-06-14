import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedsMastheadComponent } from './seds-masthead.component';
import { SedsMastheadShowcaseComponent } from './seds-masthead-showcase/seds-masthead-showcase.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    SedsMastheadComponent,
    SedsMastheadShowcaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SedsMastheadComponent,
    SedsMastheadShowcaseComponent
  ]
})
export class SedsMastheadModule { }
