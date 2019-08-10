import { Forecast } from './forecast.model';

export class Weather {
    city: string;
    date: number;
    temperature: number;
    info: string;
    windspeed: number;
    winddirection: number;
    humidity: number;
    pressure: number;
    maxtemperature: number;
    mintemperature: number;
    sunrise: number;
    sunset: number;
    forecasts: Array<Forecast>;
 
    constructor() { }
}