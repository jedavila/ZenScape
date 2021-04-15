import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioVisualizacionPageRoutingModule } from './diario-visualizacion-routing.module';

import { DiarioVisualizacionPage } from './diario-visualizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioVisualizacionPageRoutingModule
  ],
  declarations: [DiarioVisualizacionPage]
})
export class DiarioVisualizacionPageModule {}
