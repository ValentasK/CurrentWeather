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

  ngOnInit(): void {
    this.Data.getData
  }

}
