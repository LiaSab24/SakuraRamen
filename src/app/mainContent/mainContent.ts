import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Hero } from './hero/hero';
import { Order } from './order/order';
import { OurMenu } from './our-menu/our-menu';
import { FindUs } from './find-us/find-us';

@Component({
    selector: 'app-mainContent',
    standalone: true,
    imports: [RouterModule, Hero, Order, OurMenu, FindUs],
    templateUrl:'./mainContent.html',
    styleUrl: './mainContent.sass',
})
export class MainContent {}
