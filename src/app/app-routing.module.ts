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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
