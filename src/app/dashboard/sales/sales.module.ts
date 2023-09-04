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
import { DialogsComponent } from './all-sales/dialogs/dialogs.component';
// dialog:model
import { ModalModule } from 'ngx-bootstrap/modal';
import { DialogSalesReturnComponent } from './sales-return/dialog-sales-return.component';
// import { PdfViewerModule } from 'ng2-pdf-viewer'; 
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';//pdf read

@NgModule({
  declarations: [
    SalesReturnComponent,
    AllSalesComponent,
    DialogsComponent,
    DialogSalesReturnComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    NgxExtendedPdfViewerModule,
   
  ]
})
export class SalesModule { }
