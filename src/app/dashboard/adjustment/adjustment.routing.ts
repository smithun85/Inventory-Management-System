import { RouterModule, Routes } from "@angular/router";
import { AdjustmentComponent } from "./adjustment.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:'adjustment',
        component:AdjustmentComponent        
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class AdjustmentRoutingModule {}