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

sensors: Sensor[]= new Array<Sensor>();
motionSensors: Sensor[]= new Array<Sensor>();
smokeSensors: Sensor[]= new Array<Sensor>();
humiditySensors: Sensor[]= new Array<Sensor>();
temperatureSensors: Sensor[]= new Array<Sensor>();

sensors$

mouseX: number;
mouseY: number;
dragSensorX: number;
dragSensorY: number;
drag: boolean = false;
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
    this.sensors[this.index].coordinateX=this.mouseX-this.dragSensorY;
    this.sensors[this.index].coordinateY=this.mouseY-this.dragSensorY;
    this.drawSensors();
  }
}

@HostListener('mousedown', ['$event'])
onmousedown()
{
  if(this.inSensors())
  {
    this.drag=true;
    this.dragSensorX=this.mouseX-this.sensors[this.index].coordinateX;
    this.dragSensorY=this.mouseX-this.sensors[this.index].coordinateX;
  }
  else
  {
    this.index=null;
    this.drag=false;
  }
}
@HostListener('mouseup')
onmouseup()
{
  this.index=null;
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

