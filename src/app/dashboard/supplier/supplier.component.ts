import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { SUPPLIER } from '../Models/supplier.model';
import { SupplierApi } from '../services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent {

  public supplierItem:SUPPLIER[]=[];
  all_supplierItem:SUPPLIER[]=[];

  //searching:
searchText:string = ''
search_Data_Available:boolean = true;

 //Pagination 
 count:number = 0;
 currentPage:number= 1 ;
 limit:number = 3;
 limits:Array<number>= [3,4,5,6,7]
 rotate:boolean = true;
 maxSize:number = this.count
 showBoundaryLinks: boolean = true;

//sorting:
reverse:boolean = false;
sortType: string = 'name';


constructor(
  private router: Router,
  private supplierApi:SupplierApi
) 
{}

ngOnInit(): void {  

  this.supplierItem = this.supplierItem.slice(0,this.limit) 
  this.getsupplierData()
  this.paginate()     
}
  //get All user_Data:
  getsupplierData(){
    this.supplierApi.getsupplier().subscribe( (item:SUPPLIER[])=>{
      console.log(item)
      this.supplierItem = item;
      this. all_supplierItem = item;
      this.count = item.length;
    })
  };


// Search Text
search(text:string){ 
  if(this.searchText !== ''){  
          
    const searched_users = this.all_supplierItem.filter(
      data =>{
        return data.name.toLowerCase().match(this.searchText.toLowerCase())
      }
    ) 
    //paginate with all searched data:
    let startItem = (this.currentPage-1) * this.limit;
    let endItem = this.currentPage * this.limit;
    this.supplierItem = searched_users.slice(startItem,endItem)

    this.search_Data_Available = this.supplierItem.length > 0;         
  } else{
    this.search_Data_Available = true
    this.getsupplierData()
    this.paginate()
  }     
}

//pagination_Logic_function:
paginate(){  
  let startItem = (this.currentPage-1) * this.limit;
  let endItem = this.currentPage * this.limit;
  this.supplierItem = this.all_supplierItem.slice(startItem,endItem)

  // console.log(startItem,endItem);
  // console.log("returnedLimitedItems", this.workData);

};

//Pagination_Event
changePage(event:PageChangedEvent ){
  this.currentPage = event.page;
  this.limit = event.itemsPerPage
  this.paginate()   
};

//Change rows per page
changeItemsPerPage(e:any){
  this.limit = e.value
  this.currentPage=1
  this.paginate()
};
 
 //sorting
 sortClick(key:any){
  console.log(key)
  this.sortType = key; 
  this.reverse = !this.reverse
 let direction = !this.reverse  ? -1 : 1;
    this.supplierItem = this.all_supplierItem.sort((a:any,b:any)=>{
      console.log(a,b)
      console.log(a[key],b[key])
      if(a[key].toLowerCase().trim() < b[key].toLowerCase().trim()){   //a.key => not read b/c key is a dynamic data so use bracket notation
        return -1 * direction
      }else if(a[key].toLowerCase().trim() > b[key].toLowerCase().trim()){
        return 1*direction
      }else{
        return 0;
      }
     })
    this.paginate()
}
}

