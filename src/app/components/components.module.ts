import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { AngularMaterialModule } from '../libs/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ScrollTopComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ScrollTopComponent
  ]
})
export class ComponentsModule { }
