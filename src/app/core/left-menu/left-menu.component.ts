import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  cities: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.cities.push('Madrid, ES');
    this.cities.push('Budapest, HG');
    this.cities.push('Londres, UK');
    this.cities.push('Berlin, GEM');
    this.cities.push('Bruselas, BEL');

  }

}
