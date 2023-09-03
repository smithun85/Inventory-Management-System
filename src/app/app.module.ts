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
import { AlertComponent } from 'ngx-bootstrap/alert';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    // AlertComponent,
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
    NgxExtendedPdfViewerModule,
   
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
