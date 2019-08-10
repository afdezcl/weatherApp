import { Injectable } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { Forecast } from 'src/app/models/forecast.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private urlApi = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private apiKey = '1d35d7c3d4d66333b5f0985ab3ae8bb2';

  constructor(private _http: HttpClient) {}

  public getWeatherInfo(cityName: string): Observable<any> {
    const url = `${this.urlApi}${cityName}&APPID=${this.apiKey}`;
    return this._http.get(url);
    
  }

  public mapResult(result: any): Weather {
    const weatherInfo = new Weather();
    weatherInfo.city = `${result.name}, ${result.sys.country}`;
    weatherInfo.maxtemperature = result.main.temp_max;
    weatherInfo.mintemperature = result.main.temp_min;
    weatherInfo.humidity = result.main.humidity;
    weatherInfo.pressure = result.main.pressure;
    weatherInfo.windspeed = result.wind.speed;
    weatherInfo.winddirection = result.wind.deg;
    weatherInfo.info = result.weather[0].main;
    weatherInfo.date = result.dt;
    weatherInfo.sunrise = result.sys.sunrise;
    weatherInfo.sunset = result.sys.sunset;
    console.log(weatherInfo.sunrise * 1000);
    
    weatherInfo.temperature = result.main.temp;
    
    return weatherInfo;
  }


}
