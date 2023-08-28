import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.routing';
// FormsModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DialogsComponent } from './dialogs/dialogs.component';


@NgModule({
  declarations: [
    CustomerComponent,
    DialogsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ]
})
export class CustomerModule { }
