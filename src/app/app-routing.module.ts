import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthGuard } from './Authentication/authServices/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full',
  },
  {
    path:'home',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)  
  },

  {
    path:'auth',
    // canActivate: [AuthGuard],
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
