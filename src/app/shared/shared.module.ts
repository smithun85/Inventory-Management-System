import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from './loader/loader.component';
import { NotificationComponent } from './notification/notification/notification.component';
import { AlertComponent } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    // AlertComponent,
  ],
  exports:[
    SidebarComponent,  //exports b/c we use SidebarComponent in other module
    HeaderComponent ,  //same ,,
    FooterComponent,
    LoaderComponent,
    NotificationComponent,
  ]
})
export class SharedModule { }
