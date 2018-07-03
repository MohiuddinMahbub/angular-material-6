import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { SidnavComponent } from './sidnav/sidnav.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path : 'sidnav', component : SidnavComponent },
	{ path : '', component : HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
