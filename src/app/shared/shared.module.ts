import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormsModule } from './material-forms/material-forms.module';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';



@NgModule({
  declarations: [WeatherIconComponent],
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  exports: [
    MaterialFormsModule,
    WeatherIconComponent
  ]
})
export class SharedModule { }
