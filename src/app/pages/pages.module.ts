import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { HeaderSectionComponent } from "./home/header-section/header-section.component";
import { FeaturesSectionComponent } from "./home/features-section/features-section.component";
import { MealsSectionComponent } from "./home/meals-section/meals-section.component";
import { StepsSectionComponent } from "./home/steps-section/steps-section.component";
import { CitiesSectionComponent } from "./home/cities-section/cities-section.component";
import { TestimonialsSectionComponent } from "./home/testimonials-section/testimonials-section.component";
import { PricesSectionComponent } from "./home/plans-section/plans-section.component";
import { ContactSectionComponent } from "./home/contact-section/contact-section.component";
import { SharedModule } from "../shared/shared.module";
import { PlanComponent } from './home/plans-section/plan/plan.component';
import { CityComponent } from './home/cities-section/city/city.component';
import { TestimonialComponent } from './home/testimonials-section/testimonial/testimonial.component';
import { FeatureComponent } from './home/features-section/feature/feature.component';
import { StepComponent } from './home/steps-section/step/step.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderSectionComponent,
    FeaturesSectionComponent,
    MealsSectionComponent,
    StepsSectionComponent,
    CitiesSectionComponent,
    TestimonialsSectionComponent,
    PricesSectionComponent,
    ContactSectionComponent,
    PlanComponent,
    CityComponent,
    TestimonialComponent,
    FeatureComponent,
    StepComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent]
})
export class PagesModule {}
