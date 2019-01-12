import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from 'src/app/app.component';
import { HttpService } from '../../Service/http.service';

@Component({
  selector: 'app-add-sensors',
  templateUrl: './add-sensors.component.html',
  styleUrls: ['./add-sensors.component.css']
})
export class AddSensorsComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  @Input()
  houseId: number;
  addSmokeSensorNumber: number;
  addMotionSensorNumber: number;
  addHumiditySensorNumber: number;
  addTemperatureSensorNumber: number;

  ngOnInit() {

  }
  addTempSensor()
  {
    for(var i =0; i<this.addTemperatureSensorNumber; i++ )
    {
      const s : Sensor=({
        temperature: 21,
        isOn: false,
        houseId: this.houseId,
        coordinateX: 10,
        coordinateY: 15,
      })
      this.httpService.addTemperatureSensor(s).subscribe(sensor=>{
        console.log(sensor);
      })   
    }

  }

  addMotionSensor()
  {
    for(var i =0; i<this.addMotionSensorNumber; i++ )
    {
      const s : Sensor=({
        isMove: true,
        isOn: false,
        houseId: this.houseId,
        coordinateX: 10,
        coordinateY: 15,
      })
      this.httpService.addMotionSensor(s).subscribe(sensor=>{
        console.log(sensor);
      })   
    }

  }

  addSmokeSensor()
  {
    for(var i =0; i<this.addSmokeSensorNumber; i++ )
    {
      const s : Sensor=({
        smoke: 13.5,
        isOn: false,
        houseId: this.houseId,
        coordinateX: 10,
        coordinateY: 15,
      })
      this.httpService.addSmokeSensor(s).subscribe(sensor=>{
        console.log(sensor);
      })   
    }

  }
  addHumiditySensor()
  {
    for(var i =0; i<this.addHumiditySensorNumber; i++ )
    {
      const s : Sensor=({
        humidity: 19.9,
        isOn: false,
        houseId: this.houseId,
        coordinateX: 10,
        coordinateY: 15,
      })
      this.httpService.addHumiditySensor(s).subscribe(sensor=>{
        console.log(sensor);
      })  

    }
  }

  l_smokeSensor(event)
  {
    this.addSmokeSensorNumber=event.target.value;
  }
  l_humiditySensor(event)
  {
    this.addHumiditySensorNumber=event.target.value;
  }
  l_tempSensor(event)
  {
    this.addTemperatureSensorNumber=event.target.value;
  }
  l_motionSensor(event)
  {
    this.addMotionSensorNumber=event.target.value;
  }

}
