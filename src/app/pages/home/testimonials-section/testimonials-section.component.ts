import { Component, OnInit } from "@angular/core";

import { TESTIMONIALS } from "./testimonials";

@Component({
  selector: "app-testimonials-section",
  templateUrl: "./testimonials-section.component.html",
  styleUrls: ["./testimonials-section.component.scss"]
})
export class TestimonialsSectionComponent implements OnInit {
  testimonials = TESTIMONIALS;

  constructor() {}

  ngOnInit() {}
}
