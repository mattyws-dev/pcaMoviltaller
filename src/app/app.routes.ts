import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./modulos/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'lista-heroes',
    loadComponent: () => import('./modulos/heroes/pages/lista-heroes/lista-heroes.page').then( m => m.ListaHeroesPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./modulos/about/about.page').then( m => m.AboutPage)
  },
];
