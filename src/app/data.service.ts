import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WeatherInfo } from "./DTO/WeatherInfo";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private url: string = "http://api.weatherstack.com/current?";
  private accessKey: string = "access_key=9192c54e806ccfcccb011c1584d9c32e";

  getData(city: string) {
    return this.http.get<WeatherInfo>(`${this.url}${this.accessKey}&query=${city}`);
  }



}
