import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { PurchasesReturnComponent } from './purchases-return/purchases-return.component';
import { PurchaseRoutingModule } from './purchase.routing';
// FormsModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DialogsComponent } from './dialogs/dialogs.component';
import { DialogPurchaseReturnComponent } from './purchases-return/dialog-purchase-return.component';


@NgModule({
  declarations: [
    AllPurchasesComponent,
    PurchasesReturnComponent,
    DialogsComponent,
    DialogPurchaseReturnComponent,
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ]
})
export class PurchaseModule { }
