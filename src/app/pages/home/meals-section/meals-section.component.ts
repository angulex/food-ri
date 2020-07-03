import { Component, OnInit } from "@angular/core";

import { MEALS } from "./meals";

@Component({
  selector: "app-meals-section",
  templateUrl: "./meals-section.component.html",
  styleUrls: ["./meals-section.component.scss"]
})
export class MealsSectionComponent implements OnInit {
  meals = MEALS;

  constructor() {}

  ngOnInit() {}
}
