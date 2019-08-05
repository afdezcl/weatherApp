import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormsModule } from './material-forms/material-forms.module';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { DropdownDirective } from './dropdown.directive';
import { DropdowntoggleDirective } from './dropdowntoggle.directive';



@NgModule({
  declarations: [WeatherIconComponent, DropdownDirective, DropdowntoggleDirective],
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  exports: [
    MaterialFormsModule,
    WeatherIconComponent,
    DropdownDirective,
    DropdowntoggleDirective
  ]
})
export class SharedModule { }
