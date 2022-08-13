import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SedsMastheadShowcaseComponent } from './../seds-masthead-showcase/seds-masthead-showcase.component';
import { SedsButtonShowcaseComponent } from './../seds-button-showcase/seds-button-showcase.component';
import { SedsShowcaseComponent } from './seds-showcase.component';

const routes: Routes = [
  { path: "",
    component: SedsShowcaseComponent,
    children: [
      { path: "masthead", component: SedsMastheadShowcaseComponent, pathMatch: 'full' },
      { path: "button", component: SedsButtonShowcaseComponent },
      { path: "**", redirectTo: "button"}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedsShowcaseRoutingModule { }
