import { Injectable } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { Forecast } from 'src/app/models/forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  public getWeatherInfo(cityName: string): Weather {
      const weather = new Weather();
      weather.city = 'Madrid, ES';
      weather.date = 'Tue, 01 May 2018 06:00 PM CEST';
      weather.humidity = 32;
      weather.info = 'Nublado';
      weather.maxtemperature = 90;
      weather.mintemperature = 58;
      weather.pressure = 1080;
      weather.sunrise = '6:58 am';
      weather.sunset = '11:40 pm';
      weather.temperature = 80;
      weather.winddirection = 270;
      weather.windspeed = 26;
      weather.forecast = new Forecast();
      weather.forecast.date = '04 May 2018';
      weather.forecast.day = 'Fri';
      weather.forecast.info = 'Mostly Cloudy';
      weather.forecast.maxTemperature = 23;
      weather.forecast.minTemperature = 8;
      
      return weather;
  }

}
