import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./mainContent/mainContent').then(m => m.MainContent) },
  { path: 'imprint', loadComponent: () => import('./imprint/imprint').then(m => m.Imprint) },
];
