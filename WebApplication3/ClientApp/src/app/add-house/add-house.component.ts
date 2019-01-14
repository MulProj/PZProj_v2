import { Component, OnInit } from '@angular/core';
import { House} from '../app.component';
import { HttpService } from '../Service/http.service';
import { DomSanitizer } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {


  
  street: string ='';
  houseNumber: number;
  postCode: string;
  town: string;
  description: string;
  formData;
  selectedFile:File =null;
  opis: string;
  progress: number;
  message: string;
  filestring: string;
  filestring2;
  stan: number = null;

  

  constructor
    (private httpService: HttpService, 
    private domSanitizer: DomSanitizer

    ) {}
  addHouse(ev)
  {
console.log(this.street);
    console.log(ev);
    const h: House=({
      street: this.street,
      houseNumber: this.houseNumber,
      postCode: this.postCode,
      town: this.town,
      description: this.description,
      image: this.filestring 
    });
  this.httpService.addHouse(h).subscribe(
    success=>{
      console.log("success");
      this.stan=1;
      },
    error=>{
      console.log("W pizdu");
      this.stan=2;
    }
    )   
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


    
      








