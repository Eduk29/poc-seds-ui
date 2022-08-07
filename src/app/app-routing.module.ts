import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SedsShowcaseModule } from './pages/seds-showcase/seds-showcase.module';

const routes: Routes = [
  { path: "showcase", loadChildren: () => import('./pages/seds-showcase/seds-showcase.module').then(m => m.SedsShowcaseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
