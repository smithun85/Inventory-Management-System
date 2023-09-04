import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { StockTransferComponent } from "./stock-transfer.component";

const routes:Routes = [
    {
        path:'stock-transfer',
        component:StockTransferComponent        
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class StockTransferRoutingModule {}