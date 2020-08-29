import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  constructor(private Data:DataService) { }

  weatherDetails:any;
  cityName:string;

  ngOnInit(): void {}

  check(){
    this.Data.getData(this.cityName).subscribe(Data => {
      console.log(Data);
      this.weatherDetails = Data;
    },
    errorResp =>{
      console.log("City not found");
      console.log(errorResp);
    })
  }


}
