import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseRoutingModule } from './expense.routing';
// dialog:model
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    ModalModule.forRoot(),
  ]
})
export class ExpenseModule { }
