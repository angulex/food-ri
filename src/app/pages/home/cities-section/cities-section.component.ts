import { Component, OnInit } from '@angular/core';

import {CITIES} from "./cities";

@Component({
  selector: 'app-cities-section',
  templateUrl: './cities-section.component.html',
  styleUrls: ['./cities-section.component.scss']
})
export class CitiesSectionComponent implements OnInit {
  cities = CITIES;

  constructor() { }

  ngOnInit() {
  }

}
