import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrasesVisualizacionPage } from './frases-visualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: FrasesVisualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrasesVisualizacionPageRoutingModule {}
