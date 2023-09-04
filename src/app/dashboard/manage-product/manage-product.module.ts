import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { UnitsComponent } from './units/units.component';
import { ProductsComponent } from './products/products.component';
import { ManageProductRoutingModule } from './manage-product.routing';
// FormsModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DialogsComponent } from './categories/dialogs/dialogs.component';
// dialog:model
import { ModalModule } from 'ngx-bootstrap/modal';
import { DialogBrandsComponent } from './brands/dialog-brands.component';
import { DialogProductsComponent } from './products/dialog-products.component';
import { DialogUnitsComponent } from './units/dialog-units.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    BrandsComponent,
    UnitsComponent,
    ProductsComponent,
    DialogsComponent,
    DialogBrandsComponent,
    DialogProductsComponent,
    DialogUnitsComponent,
   
  ],
  imports: [
    CommonModule,
    ManageProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
  ]
})
export class ManageProductModule { }
