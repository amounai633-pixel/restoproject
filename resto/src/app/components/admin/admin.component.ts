import { Component } from '@angular/core';
import { ChefsComponent } from "../chefs/chefs.component";
import { AddMenuComponent } from "../add-menu/add-menu.component";
import { MenuTableComponent } from "../menu-table/menu-table.component";
import { ChefsTableComponent } from "../chefs-table/chefs-table.component";

@Component({
  selector: 'app-admin',
  imports: [MenuTableComponent, ChefsTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
