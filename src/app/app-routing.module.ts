import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./paginas/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'musica',
    loadChildren: () => import('./paginas/musica/musica.module').then( m => m.MusicaPageModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./paginas/playlist/playlist.module').then( m => m.PlaylistPageModule)
  },
  {
    path: 'visual-cancion',
    loadChildren: () => import('./paginas/visual-cancion/visual-cancion.module').then( m => m.VisualCancionPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./paginas/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'emociones',
    loadChildren: () => import('./paginas/emociones/emociones.module').then( m => m.EmocionesPageModule)
  },
  {
    path: 'diario',
    loadChildren: () => import('./paginas/diario/diario.module').then( m => m.DiarioPageModule)
  },
  {
    path: 'frases',
    loadChildren: () => import('./paginas/frases/frases.module').then( m => m.FrasesPageModule)
  },
  {
    path: 'meditacion',
    loadChildren: () => import('./paginas/meditacion/meditacion.module').then( m => m.MeditacionPageModule)
  },
  {
    path: 'frases-visualizacion',
    loadChildren: () => import('./paginas/frases-visualizacion/frases-visualizacion.module').then( m => m.FrasesVisualizacionPageModule)
  },
  {
    path: 'diario-visualizacion',
    loadChildren: () => import('./paginas/diario-visualizacion/diario-visualizacion.module').then( m => m.DiarioVisualizacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
