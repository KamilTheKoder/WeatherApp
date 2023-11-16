import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weatherApp';

  constructor(private WeatherService: ServicesService) {

  }

  ngOnInit():void {
    this.WeatherService.getWeatherData('Warsaw')
    .subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }
}
