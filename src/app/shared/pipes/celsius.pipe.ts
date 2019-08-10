import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: any, symbol: boolean = true): any {
    if(value === undefined || value === null || value === ''){
      value = 273.15; //que sera los 0 grados
    }

    const celsiusValue = (value - 273.15);

    return `${Math.round(celsiusValue).toString()} ${symbol ? 'ºC' : ''}`;

  }


}
