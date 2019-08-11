import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

const weatherRoutes: Routes = [
    {
        path: 'weather',
        component: MainLayoutComponent, //primero renderiza este
        children: [
            { path: 'info', component: WeatherCardComponent } //despues este, su hijo
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(weatherRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WeatherRoutingModule { }