import { Component } from '@angular/core';
import { PopularDishesComponent } from "../popular-dishes/popular-dishes.component";
import { PopularMenuComponent } from "../popular-menu/popular-menu.component";
import { ChefsComponent } from "../chefs/chefs.component";
import { ReservationComponent } from "../reservation/reservation.component";
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-home',
  imports: [PopularDishesComponent, PopularMenuComponent, ChefsComponent, ReservationComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
