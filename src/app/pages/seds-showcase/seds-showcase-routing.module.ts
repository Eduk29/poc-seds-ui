import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SedsMastheadShowcaseComponent } from './../seds-masthead-showcase/seds-masthead-showcase.component';
import { SedsShowcaseComponent } from './seds-showcase.component';

const routes: Routes = [
  { path: "",
    component: SedsShowcaseComponent,
    children: [
      { path: "masthead", component: SedsMastheadShowcaseComponent }
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedsShowcaseRoutingModule { }
