import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioPageRoutingModule } from './diario-routing.module';

import { DiarioPage } from './diario.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DiarioPage]
})
export class DiarioPageModule {}
