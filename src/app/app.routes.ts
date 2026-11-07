import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home, title: 'Acasă' },
      {
        path: 'program',
        title: 'Program',
        loadComponent: () => import('./features/program/program').then(m => m.Program),
      },
      {
        path: 'bilete',
        title: 'Bilete',
        loadComponent: () => import('./features/bilete/bilete').then(m => m.Bilete),
      },
      {
        path: 'rezervare',
        title: 'Rezervare',
        loadComponent: () => import('./features/rezervare/rezervare').then(m => m.Rezervare),
      },
      {
        path: 'despre',
        title: 'Despre noi',
        loadComponent: () => import('./features/despre/despre').then(m => m.Despre),
      },
      {
        path: 'contact',
        title: 'Contact',
        loadComponent: () => import('./features/contact/contact').then(m => m.Contact),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
