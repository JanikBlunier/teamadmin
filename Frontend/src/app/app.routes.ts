import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {KalenderComponent} from './kalender/kalender.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'kalender', component: KalenderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes{

}
