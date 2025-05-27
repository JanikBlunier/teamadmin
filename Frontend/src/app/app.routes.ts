import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {KalenderComponent} from './kalender/kalender.component';

export const routes: Routes = [
  {path: '/home', component: HomeComponent},
  {path: '/kalender', component: KalenderComponent},
];
