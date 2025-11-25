import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { Order } from './order/order';
import { OurMenu } from './our-menu/our-menu';
import { FindUs } from './find-us/find-us';
import { Footer } from './shared/footer/footer';

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero', component: Hero },
  { path: 'order', component: Order },
  { path: 'our-menu', component: OurMenu },
  { path: 'find-us', component: FindUs },
  { path: 'footer', component: Footer }
];

