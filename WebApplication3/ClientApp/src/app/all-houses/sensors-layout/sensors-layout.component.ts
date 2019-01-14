/*import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
mouseDown: boolean;
drag: boolean = false;
dragHoldX;
dragHoldY;
index:number;

@ViewChild('canvas') canvas: ElementRef;
temperatureSensor = new Image
humiditySensor = new Image
smokeSensor = new Image
motionSensor = new Image

public ctx: CanvasRenderingContext2D;

ngAfterViewInit(): void {
  this.ctx = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
}
ngOnInit(): void {
this.sensors$ = this.httpService.getSensorsByHouseId(this.houseId);
this.temperatureSensor.src="../../../assets/sensor/temperature.png";
this.humiditySensor.src="../../../assets/sensor/humidity.png";
this.smokeSensor.src="../../../assets/sensor/smoke.png";
this.motionSensor.src="../../../assets/sensor/move.png";
this.canvas.nativeElement.addEventListener("mousemove", this.mouseUp, false); 


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
    this.drawSensors();
})

}

drawSensors()
{ 
  this.ctx.clearRect(0, 0, 800, 600);
  for(var i =0; i<this.sensors.length;i++)
  {

    if(this.sensors[i].temperature!= undefined)
      this.ctx.drawImage(this.temperatureSensor, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].isMove!= undefined)
      this.ctx.drawImage(this.motionSensor, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].smoke!= undefined)
      this.ctx.drawImage(this.smokeSensor, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].humidity!= undefined)
      this.ctx.drawImage(this.humiditySensor, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);

  }
  console.log("narysowane");
}

mouseUp(){
  console.log("mamy to");
}
mousedown(){
  this.mouseDown=true;
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
inSensor(x: number, y: number):boolean{
  for(var i =0; i<this.sensors.length; i++)
  {
    console.log("petla" +i)
    if(this.sensors[i].coordinateX<=x && this.sensors[i].coordinateX+35>=x && this.sensors[i].coordinateY<=y && this.sensors[i].coordinateY+35>=y)
    {
     this.index=i;
     console.log("index "+ this.index );
    }

}
if(this.index!=null)
{
  return true;
}
else
{
  return false;

}
}
mouse(event)
{
  this.mouseX=event.clientX - this.canvas.nativeElement.getBoundingClientRect().x;
  this.mouseY=event.clientY - this.canvas.nativeElement.getBoundingClientRect().y;
  console.log("klik "+this.mouseX + " "+ this.mouseY);
  if(this.drag==true)
  {
    console.log("sensor");
      this.sensors[this.index].coordinateX=this.mouseX;
      console.log("1");
      this.sensors[this.index].coordinateY=this.mouseY;
      console.log("2");
      this.drag=false;
      this.index=null;
      this.ctx.clearRect(0, 0, 800, 600);
      this.drawSensors(); 
      
  }
  else
  {
    if(this.inSensor(this.mouseX, this.mouseY))
    {
        this.drag=true;
    }

  }
}



saveSensors(){
  for(var i =0; i<this.sensors.length; i++)
  {
    if(this.sensors[i].temperature!=undefined)
   {
    this.httpService.updateTemperatureSensor(this.sensors[i]).subscribe(
      (value)=>{console.log("poprawnie")},
      (error)=>{console.log('error')},
      ()=>console.log("koniec")
     ); 
   }
    else if(this.sensors[i].humidity!=undefined)
    {
      this.httpService.updateHumiditySensor(this.sensors[i]).subscribe(
        (value)=>{console.log("poprawnie")},
        (error)=>{console.log('error')},
        ()=>console.log("koniec")
       ); 
    }
    else if(this.sensors[i].isMove!=undefined)
    {
      this.httpService.updateMotionSensor(this.sensors[i]).subscribe(
        (value)=>{console.log("poprawnie")},
        (error)=>{console.log('error')},
        ()=>console.log("koniec")
       ); 
    }
    else if(this.sensors[i].smoke!=undefined)
    {
      this.httpService.updateSmokeSensor(this.sensors[i]).subscribe(
        (value)=>{console.log("poprawnie")},
        (error)=>{console.log('error')},
        ()=>console.log("koniec")
       ); 
    }
  }
}

}

*/

import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from '../../Service/http.service';
import { Sensor } from 'src/app/app.component';

@Component({
  selector: 'app-sensors-layout',
  templateUrl: './sensors-layout.component.html',
  styleUrls: ['./sensors-layout.component.css']
})
export class SensorsLayoutComponent {
constructor(private domSanitizer: DomSanitizer, private httpService: HttpService){
  
}
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

drag: boolean = false;
dragHoldX;
dragHoldY;
index:number;

@ViewChild('canvas') canvas: ElementRef;
temperatureSensor = new Image
humiditySensor = new Image
smokeSensor = new Image
motionSensor = new Image

public ctx: CanvasRenderingContext2D;

ngAfterViewInit(): void {
  this.ctx = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
  
console.log(this.canvas);
}
ngOnInit(): void {
this.sensors$ = this.httpService.getSensorsByHouseId(this.houseId);
this.temperatureSensor.src="../../../assets/sensor/temp.png";
this.humiditySensor.src="../../../assets/sensor/hum.png";
this.smokeSensor.src="../../../assets/sensor/smoke.png";
this.motionSensor.src="../../../assets/sensor/move.png";
this.canvas.nativeElement.addEventListener("mouseup", function(event){
  console.log("Teraz mówię ja");
  console.log(this.canvas);
});




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
    this.drawSensors();
})

}
@HostListener('mousemove', ['$event']) 
onmousemove(event: MouseEvent)
{
  this.mouseX=event.x-this.canvas.nativeElement.getBoundingClientRect().x;
  this.mouseY=event.y-this.canvas.nativeElement.getBoundingClientRect().y;
  if(this.drag)
  {
    this.sensors[this.index].coordinateX=this.mouseX;
    this.sensors[this.index].coordinateY=this.mouseY;
    console.log("rysuję");
    this.drawSensors();
  }
}

@HostListener('mousedown', ['$event'])
onmousedown()
{
  if(this.inSensors())
  {
    console.log("sensor");
    this.drag=true;
  }
}
@HostListener('mouseup')
onmouseup()
{
  this.drag=false;
}


drawSensors()
{ 
  this.ctx.clearRect(0, 0, 800, 600);
  for(var i =0; i<this.sensors.length;i++)
  {

    if(this.sensors[i].temperature!= undefined)
      this.ctx.drawImage(this.temperatureSensor, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].isMove!= undefined)
      this.ctx.drawImage(this.motionSensor, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].smoke!= undefined)
      this.ctx.drawImage(this.smokeSensor, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);
    else if(this.sensors[i].humidity!= undefined)
      this.ctx.drawImage(this.humiditySensor, this.sensors[i].coordinateX, this.sensors[i].coordinateY, 35, 35);

  }
  console.log("narysowane");
}

mouseUp(){
  console.log(this.canvas.nativeElement);
  this.index=null;
  this.drag=false
}

inSensors()
{
  for(var i = 0; i<this.sensors.length; i++)
  {
    if(this.sensors[i].coordinateX<=this.mouseX && this.sensors[i].coordinateX+35>=this.mouseX)
    {
      if(this.sensors[i].coordinateY<=this.mouseY && this.sensors[i].coordinateY+35>=this.mouseY)
        this.index=i;
    }
  }
  if(this.index!=null)
    return true;
  else
    return false;
  
}







saveSensors(){
  for(var i =0; i<this.sensors.length; i++)
  {
    if(this.sensors[i].temperature!=undefined)
   {
    this.httpService.updateTemperatureSensor(this.sensors[i]).subscribe(
      (value)=>{console.log("poprawnie")},
      (error)=>{console.log('error')},
      ()=>console.log("koniec")
     ); 
   }
    else if(this.sensors[i].humidity!=undefined)
    {
      this.httpService.updateHumiditySensor(this.sensors[i]).subscribe(
        (value)=>{console.log("poprawnie")},
        (error)=>{console.log('error')},
        ()=>console.log("koniec")
       ); 
    }
    else if(this.sensors[i].isMove!=undefined)
    {
      this.httpService.updateMotionSensor(this.sensors[i]).subscribe(
        (value)=>{console.log("poprawnie")},
        (error)=>{console.log('error')},
        ()=>console.log("koniec")
       ); 
    }
    else if(this.sensors[i].smoke!=undefined)
    {
      this.httpService.updateSmokeSensor(this.sensors[i]).subscribe(
        (value)=>{console.log("poprawnie")},
        (error)=>{console.log('error')},
        ()=>console.log("koniec")
       ); 
    }
  }
}

}

