import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmocionesPageRoutingModule } from './emociones-routing.module';

import { EmocionesPage } from './emociones.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmocionesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EmocionesPage]
})
export class EmocionesPageModule {}
