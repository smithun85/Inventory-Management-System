import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { AllSalesComponent } from './all-sales/all-sales.component';
import { SalesRoutingModule } from './sales.routing';



@NgModule({
  declarations: [
    SalesReturnComponent,
    AllSalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
  ]
})
export class SalesModule { }
