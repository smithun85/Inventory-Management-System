import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockTransferComponent } from './stock-transfer.component';
import { StockTransferRoutingModule } from './stock-transfer.routing';



@NgModule({
  declarations: [
    StockTransferComponent
  ],
  imports: [
    CommonModule,
    StockTransferRoutingModule,
  ]
})
export class StockTransferModule { }
