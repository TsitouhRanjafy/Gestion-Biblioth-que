import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-profil',
  standalone: true,
  imports: [],
  templateUrl: './card-profil.component.html',
  styleUrl: './card-profil.component.scss'
})
export class CardProfilComponent {

  @Input({ required: true }) lastname: string = 'lastname';
}
