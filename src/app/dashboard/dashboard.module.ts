import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';

import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';

// FormsModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//http for server;
import { HttpClientModule } from '@angular/common/http';

//dropdown
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//modelModule:
import { ModalModule } from 'ngx-bootstrap/modal';
//pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// chart
import { FullCalendarModule } from '@fullcalendar/angular';

// pdf excel
import { ExportAsModule } from 'ngx-export-as';


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
    FormsModule,
    ReactiveFormsModule,   
    ModalModule.forRoot(),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    FontAwesomeModule, 
    ExportAsModule,
  ],
  exports:[DashboardLayoutComponent]
})
export class DashboardModule { }
