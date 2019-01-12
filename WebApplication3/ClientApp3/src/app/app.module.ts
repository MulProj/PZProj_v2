import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllHousesComponent } from './all-houses/all-houses.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { SensorsComponent } from './sensors/sensors.component';
import { ChatComponent } from './chat/chat.component';
import { FindUsComponent } from './find-us/find-us.component';
import { SupportComponent } from './support/support.component';
import { PlaceComponent } from './place/place.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './Service/http.service';
import {FormsModule} from '@angular/forms';
import { CanvasComponent } from './canvas/canvas.component';
import { UploadComponent } from './upload/upload.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    MainPageComponent,
    NavigationComponent,
    TopNavComponent,
    LeftNavComponent,
    DefaultPageComponent,
    PageNotFoundComponent,
    AllHousesComponent,
    AddHouseComponent,
    SensorsComponent,
    ChatComponent,
    FindUsComponent,
    SupportComponent,
    PlaceComponent,
    CanvasComponent,
    UploadComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [
    HttpService

  ],
  bootstrap: [
    AppComponent
  ],
  
})
export class AppModule { }
