import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './parallax.directive';
import { HideHeaderDirective } from './hide-header.directive';



@NgModule({
  declarations: [
    ParallaxDirective,
    HideHeaderDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedDirectivesModule { }
