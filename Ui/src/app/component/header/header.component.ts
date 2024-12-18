import { Component , Input} from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { TextNotificationComponent } from './text-notification/text-notification.component';
import { LogoComponent } from "./logo/logo.component";
import { IEventEmitNotification } from '../../models/type.model';
import { NgClass } from '@angular/common';
import { SingleNotificationComponent } from "./single-notification/single-notification.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchBarComponent,
    TextNotificationComponent,
    LogoComponent,
    NgClass,
    SingleNotificationComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showRelease: boolean = true;
  showFeatured: boolean = false;

  @Input() newRelease: boolean = true;
  @Input() featured: boolean = true;


  toggleCardNotification(value: IEventEmitNotification){
    switch (value.title) {
      case 'New Release':
        if (!value.status){
          this.showRelease = value.status
        }else if(this.showFeatured){
          this.showFeatured = false;
          this.showRelease = value.status;
        }else{
          this.showRelease = value.status;
        }
        break;
      case 'Featured':
        if (!value.status){
          this.showFeatured = false
        }else if (this.showRelease){
          this.showRelease = false;
          this.showFeatured = value.status
        }else{
          this.showFeatured = value.status;
        }
        break;
    
      default:
        break;
    }

    console.log(`showRelease:${this.showRelease}, showFeastured:${this.showFeatured}`);
  }

  hiddenNotificationCard(){
    this.showRelease = false;
    this.showFeatured = false;
  }
}
