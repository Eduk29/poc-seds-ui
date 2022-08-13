import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "showcase", loadChildren: () => import('./pages/seds-showcase/seds-showcase.module').then(m => m.SedsShowcaseModule) },
  { path: "**", redirectTo: "showcase" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
