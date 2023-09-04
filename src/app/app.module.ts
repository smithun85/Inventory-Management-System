import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Bootstrap:
import { ModalModule } from 'ngx-bootstrap/modal';
// import { NgxChartsModule }from '@swimlane/ngx-charts';
// FormsModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//http for server;
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//dropdown
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


//pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from './shared/loader/loader.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NotificationComponent } from './shared/notification/notification/notification.component';
// dummy API;
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './dashboard/services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,   
    HttpClientModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    FontAwesomeModule, 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

// HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// ),

   
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
