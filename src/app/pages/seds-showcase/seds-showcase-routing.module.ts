import { SedsMastheadShowcaseComponent } from './../../components/seds-masthead/seds-masthead-showcase/seds-masthead-showcase.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SedsShowcaseComponent } from './seds-showcase.component';

const routes: Routes = [
  { path: "",
    component: SedsShowcaseComponent,
    children: [
      { path: "masthead", component: SedsMastheadShowcaseComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedsShowcaseRoutingModule { }
