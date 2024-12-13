import { Component } from '@angular/core';
import { SingleBookComponent } from './single-book/single-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SingleBookComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestion-bibliotheque';
}
