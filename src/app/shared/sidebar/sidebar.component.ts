import { Component } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  lists = [   
    {
      id:7,
      menu:"Contacts",
      icon:"fa-solid fa-phone",
      router:'contacts',
 
      children:[
        {
          subMenu:'',
          icon:'',
          router:''
        }
      ]
        
      
    },

    {
      id:8,
      menu:"Services",
      icon:"fa-solid fa-user-plus",
      router:'services', 

      children:[
        {
          subMenu:'',
          icon:'',
          router:''
        }
      ]
    },
    {
      id:8,
      menu:"course-1",
      icon:"fa-solid fa-user-plus",
      router:'course1',   
      children:[
        {
          subMenu:'',
          icon:'',
          router:''
        }
      ]   
    },

    {
      id:8,
      menu:"Pagination",
      icon:"fa-solid fa-user-plus",
      router:'pagination',
      children:[
        {
          subMenu:'',
          icon:'',
          router:''
        }
      ]      
    },


  ]

}
