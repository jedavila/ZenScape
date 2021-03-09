import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualCancionPage } from './visual-cancion.page';

const routes: Routes = [
  {
    path: '',
    component: VisualCancionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualCancionPageRoutingModule {}
