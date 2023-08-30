import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes:Routes= [
    {
        path:'',
        component:DashboardComponent,
    },    
            {
                path:'manage-product',
                loadChildren: ()=> import('../dashboard/manage-product/manage-product.module').then(m=>m.ManageProductModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/customer/customer.module').then(m=>m.CustomerModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/supplier/supplier.module').then(m=>m.SupplierModule)
            },
            {
                path:'purchase',
                loadChildren: ()=> import('../dashboard/purchase/purchase.module').then(m=>m.PurchaseModule)
            },
            {
                path:'sales',
                loadChildren: ()=> import('../dashboard/sales/sales.module').then(m=>m.SalesModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/warehouse/warehouse.module').then(m=>m.WarehouseModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/stock-transfer/stock-transfer.module').then(m=>m.StockTransferModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/adjustment/adjustment.module').then(m=>m.AdjustmentModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/expense/expense.module').then(m=>m.ExpenseModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/payment-report/payment-report.module').then(m=>m.PaymentReportModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/stock-report/stock-report.module').then(m=>m.StockReportModule)
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/staff/staff.module').then(m=>m.StaffModule)
            },
            {
                path:'**',
                redirectTo:'',
                pathMatch:'full'
              }
          
        ];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class DashboardRoutingModule {}