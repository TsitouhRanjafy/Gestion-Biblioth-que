import { NgIf } from '@angular/common';
import { Component , Input} from '@angular/core';

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
  @Input() newRelease: boolean = false;
}
