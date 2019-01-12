import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from '../../Service/http.service';
import { Sensor } from 'src/app/app.component';

@Component({
  selector: 'app-sensors-layout',
  templateUrl: './sensors-layout.component.html',
  styleUrls: ['./sensors-layout.component.css']
})
export class SensorsLayoutComponent {
constructor(private domSanitizer: DomSanitizer, private httpService: HttpService){}
@Input()
houseId
@Input()
plan
sensors$
sensors: Sensor[]= new Array<Sensor>();
motionSensors: Sensor[]= new Array<Sensor>();
smokeSensors: Sensor[]= new Array<Sensor>();
humiditySensors: Sensor[]= new Array<Sensor>();
temperatureSensors: Sensor[]= new Array<Sensor>();
counter: 0;
mouseX;
mouseY;
dragHoldX;
dragHoldY;
index:number;

@ViewChild('temperature') temperatureSensor: ElementRef; 
@ViewChild('humidity') humiditySensor: ElementRef; 
@ViewChild('smoke') smokeSensor: ElementRef; 
@ViewChild('move') moveSensor: ElementRef; 
@ViewChild('canvas') canvas: ElementRef;
public ctx: CanvasRenderingContext2D;

ngAfterViewInit(): void {
  this.ctx = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
}
ngOnInit(): void {
  this.sensors$ = this.httpService.getSensorsByHouseId(this.houseId);

 this.sensors$.subscribe(sen => {
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
this.drawSensors()
})

}




drawSensors()
{ 
  this.ctx.clearRect(0, 0, 800, 600);
  for(var i =0; i<this.sensors.length;i++)
  {
    if(this.sensors[i].temperature!= undefined)
      this.ctx.drawImage(this.temperatureSensor.nativeElement, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].isMove!= undefined)
      this.ctx.drawImage(this.moveSensor.nativeElement, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].smoke!= undefined)
      this.ctx.drawImage(this.smokeSensor.nativeElement, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].humidity!= undefined)
      this.ctx.drawImage(this.humiditySensor.nativeElement, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
  }
  console.log("narysowane");
}
inSensors()
{
  for(var i = 0; i<this.sensors.length; i++)
  {
    if(this.sensors[i].coordinateX<=this.mouseX && this.sensors[i].coordinateX+35>=this.mouseX)
    {
      if(this.sensors[i].coordinateY<=this.mouseY && this.sensors[i].coordinateY+35>=this.mouseY)
      {
       
        this.index=i;
        this.sensors[i].drag=true; 
      }

    }
  }
}
mouse(event)
{
console.log(event);
 this.mouseX=event.clientX - this.canvas.nativeElement.getBoundingClientRect().x;
 this.mouseY=event.clientY - this.canvas.nativeElement.getBoundingClientRect().y;
 this.inSensors();
 for(var i=0; i<this.sensors.length; i++)
 {
   if(this.sensors[i].drag=true)
   {
     if(this.sensors[this.index].coordinateX-(this.mouseX-15) >5 || (this.mouseX-15)-this.sensors[this.index].coordinateX>5 )
     {
        if(this.sensors[this.index].coordinateY-(this.mouseY-15) >5 || (this.mouseY-15)-this.sensors[this.index].coordinateY>5 )
        {
          this.sensors[this.index].coordinateX=this.mouseX-15;
          this.sensors[this.index].coordinateY=this.mouseY-15;
          this.ctx.clearRect(0, 0, 800, 600);
          this.sensors[i].drag=false;
          this.drawSensors(); 
        }
     }

   }
 }
}

saveSensors(){
  for(var i =0; i<this.sensors.length; i++)
  {
    if(this.sensors[i].temperature!=undefined)
   {
    this.httpService.updateTemperatureSensor(this.sensors[i]).subscribe(sensor=>{
      console.log(sensor);
     }) 
   }
    else if(this.sensors[i].humidity!=undefined)
    {
      this.httpService.updateHumiditySensor(this.sensors[i]).subscribe(sensor=>{
        console.log(sensor);
       }) 
    }
    else if(this.sensors[i].isMove!=undefined)
    {
      this.httpService.updateMotionSensor(this.sensors[i]).subscribe(sensor=>{
        console.log(sensor);
       }) 
    }
    else if(this.sensors[i].smoke!=undefined)
    {
      this.httpService.updateSmokeSensor(this.sensors[i]).subscribe(sensor=>{
        console.log(sensor);
       }) 
    }
  }
  console.log("temp: ")
  console.log(this.temperatureSensors);
  console.log("hum");
  console.log(this.humiditySensors);
}

}

