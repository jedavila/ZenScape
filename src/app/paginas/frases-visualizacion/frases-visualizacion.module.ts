import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrasesVisualizacionPageRoutingModule } from './frases-visualizacion-routing.module';

import { FrasesVisualizacionPage } from './frases-visualizacion.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrasesVisualizacionPageRoutingModule,
    ComponentesModule
  ],
  declarations: [FrasesVisualizacionPage]
})
export class FrasesVisualizacionPageModule {}
