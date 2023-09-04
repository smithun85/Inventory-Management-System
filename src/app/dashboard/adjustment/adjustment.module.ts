import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdjustmentComponent } from './adjustment.component';
import { AdjustmentRoutingModule } from './adjustment.routing';



@NgModule({
  declarations: [
    AdjustmentComponent
  ],
  imports: [
    CommonModule,
    AdjustmentRoutingModule
  ]
})
export class AdjustmentModule { }
