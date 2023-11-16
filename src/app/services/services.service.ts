import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url: string = "http://api.weatherapi.com/v1/current.json?key=a9f70a27d24842ec81a141347231611"

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    return this.http.get<{ data: WeatherData[] }>(this.url, {
      params: new HttpParams().set('q', cityName)
    })
  }
}
