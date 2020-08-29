import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { WeatherInfo } from '../DTO/WeatherInfo';


@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  constructor(private Data:DataService) { }

  weatherDetails:WeatherInfo;
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
