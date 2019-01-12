import { Component, OnInit } from '@angular/core';
import { House, Sensor } from '../app.component';
import { HttpService } from '../Service/http.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  street: string;
  houseNumber: number;
  postCode: string;
  town: string;
  description: string;
  formData;
  selectedFile:File =null;

  numberMotionSensor:number;
  numberTemperatureSensor: number;
  numberSmokeSensor: number;
  numberHumiditySensor=0;
  motionSensorArray:Array<Sensor> = new Array<Sensor>();
  temperatureSensorArray:Array<Sensor> = new Array<Sensor>();
  smokeSensorArray:Array<Sensor> = new Array<Sensor>();
  humiditySensorArray:Array<Sensor> = new Array<Sensor>();
  






  opis: string;
  progress: number;
  message: string;
  filestring: string;
  filestring2;
  xd: number;
  

  constructor
    (private httpService: HttpService, 
    private domSanitizer: DomSanitizer

    ) {}
  addHouse()
  {
    const h: House=({
      street: this.street,
      houseNumber: this.houseNumber,
      postCode: this.postCode,
      town: this.town,
      description: this.description,
      image: this.filestring 
    });


    console.log(this.filestring2)
  this.httpService.addHouse(h).subscribe(house=>{
     console.log(house);
    })   
  }
  ngOnInit(): void {
     
  }
  s_street(event)
  {
    this.street=event.target.value
  }
  s_houseNumber(event)
  {
    this.houseNumber=event.target.value
  }
  s_postCode(event)
  {
    this.postCode=event.target.value
  }
  s_town(event)
  {
    this.town=event.target.value
  }
  s_description(event)
  {
    this.description=event.target.value
  }
  l_motionSensors(event)
  {
    this.numberMotionSensor=event.target.value

  }
  l_temperatureSensors(event)
  {
    this.numberTemperatureSensor=event.target.value
  }
  l_smokeSensors(event)
  {
    this.numberSmokeSensor=event.target.value

  }
  l_humiditySensors(event)
  {
    this.numberHumiditySensor=event.target.value

  }

 
  getBase64(event) {
    let img;
    let me = this;
    let file = event.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=> {
      this.filestring=reader.result.toString();
      this.filestring2=this.domSanitizer.bypassSecurityTrustHtml(this.filestring);
    };

    reader.onerror = function (error) {
    console.log('Error: ', error);
    };
 }








}






  

 
 
 export class Upload {
  $key: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  createdAt: Date=new Date();

  constructor(file:File){
      this.file=file;
  }
}


    
      








