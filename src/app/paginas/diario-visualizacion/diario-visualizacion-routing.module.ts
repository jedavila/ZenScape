import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioVisualizacionPage } from './diario-visualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioVisualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioVisualizacionPageRoutingModule {}
