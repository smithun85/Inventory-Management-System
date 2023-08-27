import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { PurchasesReturnComponent } from './purchases-return/purchases-return.component';
import { PurchaseRoutingModule } from './purchase.routing';



@NgModule({
  declarations: [
    AllPurchasesComponent,
    PurchasesReturnComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
  ]
})
export class PurchaseModule { }
