import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllHousesComponent } from './all-houses/all-houses.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { SensorsComponent } from './sensors/sensors.component';
import { AddSensorsComponent } from './all-houses/add-sensors/add-sensors.component';
import { CanvasComponent } from './canvas/canvas.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'all-houses', component: AllHousesComponent },
  { path: 'all-houses/add-sensors', component: AddSensorsComponent },
  { path: 'add-house', component: AddHouseComponent },
  { path: 'sensors', component: SensorsComponent },
  {path: 'canvas', component: CanvasComponent },
  { path: 'default', component: DefaultPageComponent },
  { path: '**', component: PageNotFoundComponent }
  

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
