import { Component, OnInit, Sanitizer } from '@angular/core';
import { HttpService } from '../Service/http.service';
import { Observable } from 'rxjs';
import { House } from '../app.component';
import {DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements OnInit{



var: String;
  constructor(private httpService: HttpService, private domSanitizer: DomSanitizer) { }
  allHouses$: Observable<Array<House>>
  
    ngOnInit(): void {
      this.allHouses$ = this.httpService.getHouses()
    }

    addHouse(){
      const h: House=({
        description: 'Opis dodanego domu',
      });

      this.httpService.addHouse(h).subscribe(house=>{
        console.log(house);
      })


    }
    toF(a)
    {
      console.log(a);
      
    }

    showImage(image)
    {
      console
      return this.domSanitizer.bypassSecurityTrustUrl(image);
    }
   
  }



  


