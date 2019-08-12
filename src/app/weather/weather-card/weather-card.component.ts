import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  weather: Weather = new Weather();
  cityName: string; 

  constructor(
    private _weatherService: WeatherService,
    private _activatedRoute: ActivatedRoute // para recoger los datos por parametro
    ) { }
  
  ngOnInit() {

    this._activatedRoute.params.subscribe( //subscribe devuelve un observable
      params => {
        this.cityName = <string>(params['cityName'] ? params['cityName'] : 'Madrid, ES');
        this._weatherService.getWeatherInfo(this.cityName).subscribe(
          data => {
            console.log(data);
            this.weather = this._weatherService.mapResult(data);
          }, error => { alert(error.message) }
        );
        this._weatherService.getForecastInfo(this.cityName).subscribe(
          data => {
            console.log(data);
            this.weather = this._weatherService.mapForecastResult(data);
          }, error => { alert(error.message) }
        );
      }
    )

    
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
