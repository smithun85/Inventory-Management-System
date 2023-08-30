import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthGaurdService } from './Authentication/authServices/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full',
  },
  {
    path:'dashboard',
    canActivate:[AuthGaurdService],
    component:DashboardLayoutComponent,
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)  
  },

  {
    path:'auth',
    loadChildren: ()=> import('./Authentication/auth.module').then(m=>m.authModule)
  },
  
  {
    path:'**',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
