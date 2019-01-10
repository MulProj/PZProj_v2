import { Component, OnInit } from '@angular/core';
import { House } from '../app.component';
import { HttpService } from '../Service/http.service';
import { ViewChild, ElementRef } from '@angular/core';
import { SensorsComponent } from '../sensors/sensors.component';
import { HttpRequest, HttpClient, HttpEventType } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ReadVarExpr, ReadKeyExpr } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  street: string;
  houseNumber: string;
  postCode: string;
  town: string;
  description: string;
  formData;
  selectedFile:File =null;
  




  ngOnInit(): void {

  }

  opis: string;
  progress: number;
  message: string;
  filestring: string;
  filestring2;
  constructor(private httpService: HttpService, private domSanitizer: DomSanitizer) { 
    
  }
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
// console.log("dupa:");
 //   console.log(this.filestring);

    
    
  }


  s_street(event)
  {
    this.street=event.target.value
    console.log(this.street);
    
  }
  s_houseNumber(event)
  {
    this.houseNumber=event.target.value
    console.log(this.houseNumber);
  }
  s_postCode(event)
  {
    this.postCode=event.target.value
    console.log(this.postCode);
  }
  s_town(event)
  {
    this.town=event.target.value
    console.log(this.town);  
  }
  s_description(event)
  {
    this.description=event.target.value
    console.log(this.description); 
  }

 
  getBase64(event) {
    let img;
    let me = this;
    let file = event.target.files[0];
    console.log(file);
    let reader = new FileReader();
   // reader.(file);readAsDataURL
    reader.readAsDataURL(file);
    reader.onloadend = ()=> {
   //   console.log("rad");
      this.filestring=reader.result.toString();
      this.filestring2=this.domSanitizer.bypassSecurityTrustHtml(this.filestring);
 //     console.log("eee");
 //     console.log(this.filestring2)
    };

    reader.onerror = function (error) {
    console.log('Error: ', error);
    };
 }
 showImage(image)
 {
   return this.domSanitizer.bypassSecurityTrustHtml(image);
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


    
      








