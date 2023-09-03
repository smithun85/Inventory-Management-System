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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
// import { PdfViewerModule } from 'ng2-pdf-viewer'; //pdf read
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExportAsModule } from 'ngx-export-as';  //pdf write

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLayoutComponent,   
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserProfileComponent,
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
    AlertModule.forRoot(),
    // PdfViewerModule,
    NgxExtendedPdfViewerModule,
   
  ],
  exports:[DashboardLayoutComponent],
})
export class DashboardModule { }
