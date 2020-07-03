import { Component, OnInit } from '@angular/core';

import { PLANS } from "./plans";

@Component({
  selector: 'app-plans-section',
  templateUrl: './plans-section.component.html',
  styleUrls: ['./plans-section.component.scss']
})
export class PricesSectionComponent implements OnInit {
  plans = PLANS;

  constructor() { }

  ngOnInit() {
  }

}
