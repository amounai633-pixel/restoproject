import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chefs-table',
  imports: [NgFor],
  templateUrl: './chefs-table.component.html',
  styleUrl: './chefs-table.component.scss'
})
export class ChefsTableComponent {
  ChefsTable:any = [
    { id: 1, name: "Ahmed Ben Ali", experience: "10 years", specialty: "Italian Cuisine" },
    { id: 2, name: "Sara Trabelsi", experience: "5 years", specialty: "French Cuisine" },
    { id: 3, name: "Youssef Gharbi", experience: "8 years", specialty: "Spanish Cuisine" }
  ];
}
