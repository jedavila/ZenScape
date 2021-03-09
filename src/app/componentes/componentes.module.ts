import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { PortadaAlbumComponent } from './portada-album/portada-album.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PortadaAlbumComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PortadaAlbumComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
