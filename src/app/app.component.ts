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

  constructor(private WeatherService: ServicesService) {

  }

  ngOnInit():void {
    this.WeatherService.getWeatherData('Egypt')
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}
