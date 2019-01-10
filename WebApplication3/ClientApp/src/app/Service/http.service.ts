import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { House, Sensor } from '../app.component';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) { }

  getHouses(): Observable<Array<House>>{
    return this.http.get<Array<House>>('https://localhost:5001/api/houses/gethouses');
  }

  getSensors() :Observable<Array<Sensor>>{
    return this.http.get<Array<Sensor>>('https://localhost:5001/api/sensors/getsensors')
  }

  addHouse(house: House):Observable<House>{
    return this.http.post('https://localhost:5001/api/Houses/addhouse', house)
  }
  addTemperatureSensor(sensor: Sensor):Observable<Sensor>{
    return this.http.post('https://localhost:5001/api/Sensors/AddTemperatureSensor', sensor)
  }
  addMotionSensor(sensor: Sensor):Observable<Sensor>{
    return this.http.post('https://localhost:5001/api/Sensors/AddMotionSensor', sensor)
  }
  
}
