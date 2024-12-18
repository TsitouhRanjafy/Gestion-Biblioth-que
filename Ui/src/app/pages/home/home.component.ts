import { Component } from '@angular/core';
import { MenuComponent } from '../../component/menu/menu.component';
import { CardProfilComponent } from "../../component/card-profil/card-profil.component";
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    CardProfilComponent,
    HeaderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
