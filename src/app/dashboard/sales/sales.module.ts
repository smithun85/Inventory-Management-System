import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { AllSalesComponent } from './all-sales/all-sales.component';
import { SalesRoutingModule } from './sales.routing';
// FormsModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DialogsComponent } from './dialogs/dialogs.component';


@NgModule({
  declarations: [
    SalesReturnComponent,
    AllSalesComponent,
    DialogsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ]
})
export class SalesModule { }
