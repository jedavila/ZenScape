import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicaPageRoutingModule } from './musica-routing.module';

import { MusicaPage } from './musica.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MusicaPage]
})
export class MusicaPageModule {}
