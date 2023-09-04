import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CashPaymentComponent } from "./cash-payment/cash-payment.component";

const routes:Routes = [
            {
                path:'cash-payment',
                component:CashPaymentComponent
            }
        ]        

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class PaymentReportRoutingModule {}