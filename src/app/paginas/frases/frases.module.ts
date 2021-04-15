import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrasesPageRoutingModule } from './frases-routing.module';

import { FrasesPage } from './frases.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrasesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [FrasesPage]
})
export class FrasesPageModule {}
