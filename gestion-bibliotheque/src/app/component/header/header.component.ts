import { Component , Input} from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { TextNotificationComponent } from './text-notification/text-notification.component';
import { LogoComponent } from "./logo/logo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchBarComponent,
    TextNotificationComponent,
    LogoComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() newRelease: boolean = true;
  @Input() featured: boolean = true;
}
