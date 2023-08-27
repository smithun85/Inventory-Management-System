import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AllSalesComponent } from "./all-sales/all-sales.component";
import { SalesReturnComponent } from "./sales-return/sales-return.component";

const routes:Routes = [

            {
                path:'all-sales',
                component:AllSalesComponent
            },
            {
                path:'sales-return',
                component:SalesReturnComponent
            }
        ]        


@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class SalesRoutingModule {}