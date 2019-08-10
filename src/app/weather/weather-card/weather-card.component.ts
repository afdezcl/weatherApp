import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { Forecast } from '../../models/forecast.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  weather: Weather = new Weather();
  cityName: string; 

  constructor(private _weatherService: WeatherService) { }
  
  ngOnInit() {
    this._weatherService.getWeatherInfo('london').subscribe(
      data => {
        console.log(data);
        this.weather = this._weatherService.mapResult(data);
      }
    );
  }

  public search(cityName: string){
    this.cityName = cityName;
    console.log(this.cityName);
  }

  public getColorTemperature(): string {
    
    if(this.weather.temperature >= 24 && this.weather !== undefined){
      return '#EF6C00';
    }

    if(this.weather.temperature <= 10 && this.weather !== undefined){
      return '#0277BD';
    }

    return '#212121';

  }

}
