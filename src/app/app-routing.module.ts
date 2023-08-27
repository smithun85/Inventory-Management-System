import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'auth',
  //   pathMatch:'full',
  // },
  {
    path:'auth',
    loadChildren: ()=> import('./Authentication/auth.module').then(m=>m.authModule)
  },

  {
    path:'dashboard',
    component:DashboardLayoutComponent,
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)  
  },
  
  {
    path:'**',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
