import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  @Input() plan: any;
  @Input() i: number;

  constructor() { }

  ngOnInit(): void {
  }

}
