import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';

import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLayoutComponent,   
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    PaginationModule.forRoot(),
    FullCalendarModule,
  ],
  exports:[DashboardLayoutComponent]
})
export class DashboardModule { }
