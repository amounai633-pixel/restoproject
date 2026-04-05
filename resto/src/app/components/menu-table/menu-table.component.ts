import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu-table',
  imports: [NgFor],
  templateUrl: './menu-table.component.html',
  styleUrl: './menu-table.component.scss'
})
export class MenuTableComponent {
  menuTable = [
    {id: 1, name: 'Pizza', price: 10 },
    {id: 2, name: 'Burger', price: 8 },
    {id: 3, name: 'Pasta', price: 12 },
    {id: 4, name: 'Salad', price: 7 }
  ];

}
