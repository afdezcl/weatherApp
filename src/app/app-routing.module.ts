import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';

const appRoutes: Routes = [
    {
        path: '', //si no tiene nada de ruta, va directamente a home/login. De inicio no tiene, http://localhost:4200
        pathMatch: 'full',
        redirectTo: 'home/login'
    },
    {
        path: '**', //cualquier ruta que no tengamos declarada ira a este redirect
        redirectTo: 'home/login'

    },
    {
        path: 'home/login', component: WeatherCardComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}