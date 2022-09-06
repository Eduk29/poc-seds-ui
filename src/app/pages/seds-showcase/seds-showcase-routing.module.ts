import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SedsButtonShowcaseComponent } from './../seds-button-showcase/seds-button-showcase.component';
import { SedsMastheadShowcaseComponent } from './../seds-masthead-showcase/seds-masthead-showcase.component';
import { SedsShowcaseComponent } from './seds-showcase.component';

const routes: Routes = [
  {
    path: "",
    component: SedsShowcaseComponent,
    children: [
      { path: "masthead", component: SedsMastheadShowcaseComponent },
      { path: "button", component: SedsButtonShowcaseComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedsShowcaseRoutingModule { }
