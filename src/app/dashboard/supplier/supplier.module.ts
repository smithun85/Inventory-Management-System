import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { SupplierRoutingModule } from './supplier.routing';



@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
  ]
})
export class SupplierModule { }
