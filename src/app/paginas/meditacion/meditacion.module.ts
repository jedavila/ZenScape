import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeditacionPageRoutingModule } from './meditacion-routing.module';

import { MeditacionPage } from './meditacion.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeditacionPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MeditacionPage]
})
export class MeditacionPageModule {}
