import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-sensors',
  templateUrl: './view-sensors.component.html',
  styleUrls: ['./view-sensors.component.css']
})
export class ViewSensorsComponent implements OnInit {

  constructor() { }
  @Input()
  houseId

  ngOnInit() {
  }

}
