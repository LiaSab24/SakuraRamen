import { Routes } from '@angular/router';
import { MainContent } from './mainContent/mainContent';

export const routes: Routes = [
  { path: '', component: MainContent },
  { path: 'imprint', loadComponent: () => import('./imprint/imprint').then(m => m.Imprint) },
];
