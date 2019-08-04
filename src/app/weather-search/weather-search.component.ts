import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
 

  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

  public searchCity(){
    this.loading = !this.loading;
    console.log(this.loading);
  }

}
