import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  showCollection: boolean = false;
  iconShow: string = 'm8.25 4.5 7.5 7.5-7.5 7.5';

  toggleCollaction(){
    this.showCollection? this.showCollection = false:this.showCollection = true;
    this.iconShow = 'm19.5 8.25-7.5 7.5-7.5-7.5';
  }

}
