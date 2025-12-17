import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
//import { MainContent } from './mainContent/mainContent';
//import { Imprint } from './imprint/imprint';
import { Footer } from './shared/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,  Footer], //MainContent, Imprint,
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('SakuraRamen');
}
