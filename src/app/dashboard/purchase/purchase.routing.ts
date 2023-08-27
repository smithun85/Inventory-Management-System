import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AllPurchasesComponent } from "./all-purchases/all-purchases.component";
import { PurchasesReturnComponent } from "./purchases-return/purchases-return.component";

const routes:Routes = [
            {
                path:'all-purchases',
                component:AllPurchasesComponent
            },
            {
                path:'purchases-return',
                component:PurchasesReturnComponent
            }
        ]        


@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class PurchaseRoutingModule {}