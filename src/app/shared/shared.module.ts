import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AngularMaterialModule } from '../libs/angular-material.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedService } from './shared.service';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, AngularMaterialModule, ComponentsModule],
  exports: [CommonModule, RouterModule, FlexLayoutModule, AngularMaterialModule, FooterComponent, HeaderComponent, ComponentsModule],
  providers: [SharedService]
})
export class SharedModule { }
