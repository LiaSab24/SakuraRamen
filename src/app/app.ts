import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Hero } from './hero/hero';
import { Order } from './order/order';
import { OurMenu } from './our-menu/our-menu';
import { FindUs } from './find-us/find-us';
import { Footer } from './shared/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Hero, Order, OurMenu, FindUs, Footer],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('SakuraRamen');
}
