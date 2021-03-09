import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualCancionPageRoutingModule } from './visual-cancion-routing.module';

import { VisualCancionPage } from './visual-cancion.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualCancionPageRoutingModule,
    ComponentesModule
  ],
  declarations: [VisualCancionPage]
})
export class VisualCancionPageModule {}
