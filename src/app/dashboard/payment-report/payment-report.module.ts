import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashPaymentComponent } from './cash-payment/cash-payment.component';
import { PaymentReportRoutingModule } from './payment-report.routing';



@NgModule({
  declarations: [
    CashPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentReportRoutingModule,
  ]
})
export class PaymentReportModule { }
