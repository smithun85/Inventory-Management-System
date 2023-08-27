import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Bootstrap:
import { ModalModule } from 'ngx-bootstrap/modal';
// import { NgxChartsModule }from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    // NgxChartsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
