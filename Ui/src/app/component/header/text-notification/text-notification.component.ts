import { NgIf } from '@angular/common';
import { Component , Input, output, Output} from '@angular/core';
import { IEventEmitNotification } from '../../../models/type.model';

@Component({
  selector: 'app-text-notification',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './text-notification.component.html',
  styleUrl: './text-notification.component.scss'
})
export class TextNotificationComponent {


  @Input({required: true}) title: string = 'title';
  @Input() newNotification: boolean = false;
  @Input() toggleNotificationShow: boolean = false;
  toggleNotificationShowChange = output<IEventEmitNotification>({alias: 'onChangeRelease'})

  toggleNofication(){
    this.toggleNotificationShow = !this.toggleNotificationShow;
    this.toggleNotificationShowChange.emit({title: this.title,status: this.toggleNotificationShow})
  }

}
