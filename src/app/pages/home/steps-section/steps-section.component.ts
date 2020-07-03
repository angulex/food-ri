import { Component, OnInit } from '@angular/core';

import { STEPS } from './steps';

@Component({
  selector: 'app-steps-section',
  templateUrl: './steps-section.component.html',
  styleUrls: ['./steps-section.component.scss']
})
export class StepsSectionComponent implements OnInit {
  steps = STEPS;

  constructor() { }

  ngOnInit() {
  }

}
