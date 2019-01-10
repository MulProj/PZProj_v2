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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.allSensors$=this.httpService.getSensors()

    }

}


