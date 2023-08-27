import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { BrandsComponent } from "./brands/brands.component";
import { CategoriesComponent } from "./categories/categories.component";
import { ProductsComponent } from "./products/products.component";
import { UnitsComponent } from "./units/units.component";

const routes:Routes = [       
            {
                path:'categories',
                component:CategoriesComponent
            },
            {
                path:'brands',
                component:BrandsComponent
            },
            {
                path:'units',
                component:UnitsComponent
            },
            {
                path:'products',
                component:ProductsComponent
            },
            
        ]        

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class ManageProductRoutingModule {}