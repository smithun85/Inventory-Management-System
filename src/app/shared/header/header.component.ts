import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router:Router, private notificationService:NotificationService){}

  logout(){
    localStorage.removeItem('myToken')
    this.router.navigate(['/'])
    this.notificationService.add('logout Successfully')
    setTimeout( ()=>{
      this.notificationService.clear()
    },4000)
  };
  
}
