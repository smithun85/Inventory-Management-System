import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { StockReportComponent } from "./stock-report.component";

const routes:Routes = [
    {
        path:'stock-report',
        component:StockReportComponent        
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class StockReportRoutingModule {}