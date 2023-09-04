import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from '../Authentication/authServices/auth-guard.service';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';

const routes:Routes= [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full',
      },
    {
        path:'',
        canActivate:[AuthGuard],
        component:DashboardLayoutComponent,
        children:[
            {
                path:'dashboard',
                canActivate:[AuthGuard],
                component:DashboardComponent,
            },   
            {
                path:'user-profile',
                component:UserProfileComponent
            } ,
            
            {
                path:'manage-product',
               canActivate:[AuthGuard],
                loadChildren: ()=> import('../dashboard/manage-product/manage-product.module').then(m=>m.ManageProductModule)
            },
            {
                path:'',
               canActivate:[AuthGuard],
                loadChildren: ()=> import('../dashboard/customer/customer.module').then(m=>m.CustomerModule)
            },
            {
                path:'',
               canActivate:[AuthGuard],
                loadChildren: ()=> import('../dashboard/supplier/supplier.module').then(m=>m.SupplierModule)
            },
            {
                path:'purchase',
               canActivate:[AuthGuard],
                loadChildren: ()=> import('../dashboard/purchase/purchase.module').then(m=>m.PurchaseModule)
            },
            {
                path:'sales',
               canActivate:[AuthGuard],
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
                redirectTo:'dashboard',
                pathMatch:'full'
              }
        ]
    },
    {
        path:'**',
        redirectTo:'dashboard',
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