import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherForecastComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //this will be the first component to render
})
export class AppModule { }
