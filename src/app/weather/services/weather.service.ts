import { Injectable } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { Forecast } from 'src/app/models/forecast.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private urlApi = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlForecastApi = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  private apiKey = '1d35d7c3d4d66333b5f0985ab3ae8bb2';
  private weatherInfo = new Weather();

  constructor(private _http: HttpClient) {}

  public getWeatherInfo(cityName: string): Observable<any> {
    const url = `${this.urlApi}${cityName}&APPID=${this.apiKey}`;
    return this._http.get(url);
    
  }

  public getForecastInfo(cityName: string): Observable<any>{
    const url = `${this.urlForecastApi}${cityName}&APPID=${this.apiKey}&cnt=5`;
    return this._http.get(url);
  }

  public mapResult(result: any): Weather {
    this.weatherInfo.city = `${result.name}, ${result.sys.country}`;
    this.weatherInfo.maxtemperature = result.main.temp_max;
    this.weatherInfo.mintemperature = result.main.temp_min;
    this.weatherInfo.humidity = result.main.humidity;
    this.weatherInfo.pressure = result.main.pressure;
    this.weatherInfo.windspeed = result.wind.speed;
    this.weatherInfo.winddirection = result.wind.deg;
    this.weatherInfo.info = result.weather[0].main;
    this.weatherInfo.date = result.dt;
    this.weatherInfo.sunrise = result.sys.sunrise;
    this.weatherInfo.sunset = result.sys.sunset;
    this.weatherInfo.temperature = result.main.temp;
    
    return this.weatherInfo;
  }

  public mapForecastResult(result: any): Weather{
    this.weatherInfo.forecasts = new Array<Forecast>();

    for(const forecast of result.list){
      const newForecast = new Forecast();
      newForecast.date = forecast.dt;
      newForecast.maxTemperature = forecast.main.temp_max;
      newForecast.minTemperature = forecast.main.temp_min;
      newForecast.info = forecast.weather[0].main;    
      this.weatherInfo.forecasts.push(newForecast);
    }
  
    return this.weatherInfo;
  }

}
