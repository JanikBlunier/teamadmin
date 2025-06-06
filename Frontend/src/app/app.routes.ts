import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {KalenderComponent} from './kalender/kalender.component';
import {NgModule} from '@angular/core';
import {CreatEventComponent} from './kalender/creat-event/creat-event.component';
import {EditEventComponent} from './kalender/edit-event/edit-event.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'kalender', component: KalenderComponent},
  {path: 'create-event', component: CreatEventComponent},
  {path: 'edit-event', component: EditEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes{

}
