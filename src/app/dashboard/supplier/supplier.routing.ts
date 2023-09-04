import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SupplierComponent } from "./supplier.component";

const routes:Routes = [
    {
        path:'supplier',
        component:SupplierComponent       
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class SupplierRoutingModule {}