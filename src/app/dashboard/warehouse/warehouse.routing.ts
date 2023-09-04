import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { WarehouseComponent } from "./warehouse.component";

const routes:Routes = [
    {
        path:'warehouse',
        component: WarehouseComponent       
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class WarehouseRoutingModule {}