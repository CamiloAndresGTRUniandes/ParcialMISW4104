import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    PlantsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class PlantsModule { }
