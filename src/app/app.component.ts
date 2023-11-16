import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';
import { Current, WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weatherApp';
  weatherData?: WeatherData | any ;
  cityName: string = 'Warsaw';

  constructor(private WeatherService: ServicesService) {

  }

  ngOnInit():void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.WeatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}
