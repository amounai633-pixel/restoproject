import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';

export const routes: Routes = [
    // http://localhost:4200 => Home will be displayed
    { path: "", component: HomeComponent },
    // http://localhost:4200/login => Login will be displayed
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "addChef", component: AddChefComponent },
    { path: "addMenu", component: AddMenuComponent },


];
 