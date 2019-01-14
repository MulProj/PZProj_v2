import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { Sensor } from 'src/app/app.component';

@Component({
  selector: 'app-view-sensors',
  templateUrl: './view-sensors.component.html',
  styleUrls: ['./view-sensors.component.css']
})


export class ViewSensorsComponent implements OnInit {

  allSensors$
  sensors: Sensor[]= new Array();
  constructor(private httpService: HttpService) { }
  @Input()
  houseId
  timeLeft: number = 60;
  interval;

  ngOnInit() {
    
        this.allSensors$ = this.httpService.getSensorsByHouseId(this.houseId); 
        this.allSensors$.subscribe(sen => {
          for(var i =0; i<sen.length; i++)
          {
            var s: Sensor=({
            coordinateX: sen[i].coordinateX,
            coordinateY: sen[i].coordinateY,
            temperature: sen[i].temperature,
            humidity: sen[i].humidity,
            smoke: sen[i].smoke,
            isMove: sen[i].isMove,
            sensorId: sen[i].sensorId,
            isOn: sen[i].isOn,
            houseId: sen[i].houseId,
            house: sen[i].house,
            drag: false
            });
            this.sensors.push(s);
          }    
    })
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.allSensors$ = this.httpService.getSensorsByHouseId(this.houseId); 
        this.allSensors$.subscribe(sen => {
          for(var i =0; i<sen.length; i++)
          {
              this.sensors[i].sensorId++;
          }
        })

      } else {
        this.timeLeft = 60;
      }
    },1000)
  }
  
    me()
    {
      console.log(this.sensors[41].sensorId);
      this.sensors[41].sensorId=1;
      console.log(this.sensors[41].sensorId);
    }
  }


