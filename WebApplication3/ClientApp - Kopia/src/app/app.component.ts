import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
}

export interface House{
  houseId?: number;
  street?: string;
  houseNumber?: number;
  postCode?: string;
  town?: string;
  description?: string;
  sensors?: Sensor[];
  image?: String;
  
  
}
export interface Sensor{
  temperature?: number;
  humidity?: number;
  smoke?: number;
  isMove?: boolean;
  sensorId?: number;
  isOn?: boolean;
  houseId?: number;
  coordinateX?: number;
  coordinateY?: number;
  house?: House[];
  drag? :boolean


}
