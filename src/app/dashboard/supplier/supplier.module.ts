import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { SupplierRoutingModule } from './supplier.routing';
// FormsModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DialogsComponent } from './dialogs/dialogs.component';



@NgModule({
  declarations: [
    SupplierComponent,
    DialogsComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ]
})
export class SupplierModule { }
