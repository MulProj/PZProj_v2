import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Service/http.service';
import { Observable } from 'rxjs';
import { Sensor } from '../app.component';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  allSensors$: Observable<Array<Sensor>>
  houseID: number;
  temp:number;
  move:boolean;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.allSensors$=this.httpService.getSensors()

    }

    s_houseID(event)
    {
      this.houseID=event.target.value
    }
    s_temp(event)
    {
      this.temp=event.target.value
    }
    s_move(event)
    {
      this.temp=event.target.value
    }
    addTemperatureSensor()
    {
      const s: Sensor=({
        isMove:this.move,
        isOn: true,
        houseId: this.houseID
 });
    this.httpService.addTemperatureSensor(s).subscribe(sensor=>{
       console.log(sensor);
      })
    }

    addMotionSensor()
    {
      const s: Sensor=({
        isMove:false,
        isOn: false,
        houseId: this.houseID
 });
    this.httpService.addTemperatureSensor(s).subscribe(sensor=>{
       console.log(sensor);
      })
    }
  
}


