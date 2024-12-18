import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-notification',
  standalone: true,
  imports: [],
  templateUrl: './single-notification.component.html',
  styleUrl: './single-notification.component.scss'
})
export class SingleNotificationComponent {

  @Input() title: string = 'title';
  @Input() author:string = 'author';
  @Input() date: string = 'date'

}
