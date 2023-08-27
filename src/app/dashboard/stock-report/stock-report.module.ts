import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockReportComponent } from './stock-report.component';
import { StockReportRoutingModule } from './stock-report.routing';



@NgModule({
  declarations: [
    StockReportComponent
  ],
  imports: [
    CommonModule,
    StockReportRoutingModule,
  ]
})
export class StockReportModule { }
