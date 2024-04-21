import { Component } from '@angular/core';
import { MenuItem } from '../models/menu-item';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  menuItems: MenuItem[] = [
    { label: 'Home', url: 'home' },
    { label: 'Casi', url: 'casi' },
    { label: 'Macchine', url: 'macchine' }
    // Add more menu items here as needed
  ];

  selectedItemIndex: number = -1;

  selectItem(index: number): void {
    this.selectedItemIndex = index;
  }

}
