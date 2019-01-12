import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  opis: string;
  sensors = [];
  l_temp: number;
  l_hum:number;
  l_smoke: number; 
  l_move:number;
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
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.ctx = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
  }

  createSensors()
  {
  for(var i = 0; i<8; i++ )
      {
        this.sensors.push(new Sensor2(i*30,10,"t"));
        console.log("tworzę");
      }
  for(var i = 0; i<8; i++ )
      {
        this.sensors.push(new Sensor2(i*30,50,"h"));
        console.log("tworzę");
      }
  for(var i = 0; i<8; i++ )
      {
        this.sensors.push(new Sensor2(i*30+400,10,"s"));
        console.log("tworzę");
      }
  for(var i = 0; i<8; i++ )
      {
        this.sensors.push(new Sensor2(i*30+400,50,"m"));
        console.log("tworzę");
      }
  }
  
  drawSensors()
  {
    this.ctx.clearRect(0, 0, 800, 600);
    for(var i =0; i<this.sensors.length;i++)
    {
      if(this.sensors[i].type=="t")
        this.ctx.drawImage(this.temperatureSensor.nativeElement, this.sensors[i].x, this.sensors[i].y, 35, 35);
      else if(this.sensors[i].type=="h")
        this.ctx.drawImage(this.humiditySensor.nativeElement, this.sensors[i].x, this.sensors[i].y, 35, 35);
        else if(this.sensors[i].type=="s")
        this.ctx.drawImage(this.smokeSensor.nativeElement, this.sensors[i].x, this.sensors[i].y, 35, 35);
        else if(this.sensors[i].type=="m")
        this.ctx.drawImage(this.moveSensor.nativeElement, this.sensors[i].x, this.sensors[i].y, 35, 35);

    }
  }

  inSensors()
    {
      for(var i = 0; i<this.sensors.length; i++)
      {
        if(this.sensors[i].x<=this.mouseX && this.sensors[i].x+35>=this.mouseX)
        {
          if(this.sensors[i].y<=this.mouseY && this.sensors[i].y+35>=this.mouseY)
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
         if(this.sensors[this.index].x-(this.mouseX-15) >5 || (this.mouseX-15)-this.sensors[this.index].x>5 )
         {
            if(this.sensors[this.index].y-(this.mouseY-15) >5 || (this.mouseY-15)-this.sensors[this.index].y>5 )
            {
              this.sensors[this.index].x=this.mouseX-15;
              this.sensors[this.index].y=this.mouseY-15;
              this.ctx.clearRect(0, 0, 800, 600);
              this.sensors[i].drag=false;
              this.drawSensors(); 
            }
         }

       }
     }
    }

}
class Sensor2{
  x:number;
  y:number;
  type:string;
  drag:boolean;
  constructor(x: number, y: number, type:string){
    this.x=x;
    this.y=y;
    this.type=type;
    this.drag=false;

  }
}
