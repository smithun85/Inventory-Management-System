import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { UnitsComponent } from './units/units.component';
import { ProductsComponent } from './products/products.component';
import { ManageProductRoutingModule } from './manage-product.routing';



@NgModule({
  declarations: [
    CategoriesComponent,
    BrandsComponent,
    UnitsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ManageProductRoutingModule,
  ]
})
export class ManageProductModule { }
