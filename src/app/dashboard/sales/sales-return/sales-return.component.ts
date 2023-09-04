import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { salesApi } from '../../services/dashboard-sales.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { SALES_RETURN } from '../../Models/sales.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogSalesReturnComponent } from './dialog-sales-return.component';
import {ExportAsService,ExportAsConfig, SupportedExtensions} from 'ngx-export-as';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.scss']
})
export class SalesReturnComponent {

  bsModalRef?: BsModalRef;
  salesAllForm:FormGroup | any;

  public salesItem:SALES_RETURN[]=[];
  all_salesItem:SALES_RETURN[]=[];

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
  private salesApi:salesApi,
  private modalService: BsModalService,
  private exportAsService: ExportAsService ,
) 
{}

ngOnInit(): void {  

  this.salesItem = this.salesItem.slice(0,this.limit) 
  this.getSalesData()
  this.paginate()     
};


// download Doc
exportAsConfig: ExportAsConfig = {
  type: 'xlsx', // the type you want to download
  elementIdOrContent: 'sampleTable', // the id of html/table element
};
// Save pdf:
savePDF(){
  this.exportAsConfig.type ='pdf';
  // download the file using old school javascript method
  this.exportAsService
    .save(this.exportAsConfig, 'Exported_File_Name')
    .subscribe(() => {
      // save started
    });
  // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  this.exportAsService.get(this.exportAsConfig).subscribe((content) => {
    console.log(content);
  });
};

saveCVS(){
  this.exportAsConfig.type ='xlsx';
  // download the file using old school javascript method
  this.exportAsService
    .save(this.exportAsConfig, 'Exported_File_Name')
    .subscribe(() => {
      // save started
    });
  // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  this.exportAsService.get(this.exportAsConfig).subscribe((content) => {
    console.log(content);
  });
}


//update-modal
openDialogFormUpdate(id:any){
  console.log(id);
  this.salesItem.map( item=>{
  if(item.id === id){
    this.salesAllForm = new FormGroup({
      invoice:new FormControl(item.invoice,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      date:new FormControl(item.date, Validators.required),
      customer:new FormControl(item.customer,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      mobile:new FormControl(item.mobile , [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      warehouse:new FormControl(item.warehouse, Validators.required),
      totalAmount:new FormControl(item.totalAmount, Validators.required),
      discount:new FormControl(item.discount, Validators.required),
      payable:new FormControl(item.payable, Validators.required),
      paid:new FormControl(item.paid, Validators.required),
      due:new FormControl(item.due, Validators.required),
    });
    let id = item.id
    const initialState:ModalOptions = {
      initialState:{
        title:'Update Sales Return Data',
        salesAllFormAdd:this.salesAllForm,
        id:id,        
      }
    };
    this.bsModalRef = this.modalService.show(DialogSalesReturnComponent, initialState);
    this.getSalesData();
  
    this.bsModalRef.content.closeBtnName = 'Close';
    
  }
  });
  
  
  }

  //get All sales Return Data:
  getSalesData(){
    this.salesApi.getSalesReturn().subscribe( (item:SALES_RETURN[])=>{
      console.log(item)
      this.salesItem = item;
      this. all_salesItem = item;
      this.count = item.length;
    })
  };


// Search Text
search(text:string){ 
  if(this.searchText !== ''){  
          
    const searched_users = this.all_salesItem.filter(
      data =>{
        return data.customer.toLowerCase().match(this.searchText.toLowerCase())
      }
    ) 
    //paginate with all searched data:
    let startItem = (this.currentPage-1) * this.limit;
    let endItem = this.currentPage * this.limit;
    this.salesItem = searched_users.slice(startItem,endItem)

    this.search_Data_Available = this.salesItem.length > 0;         
  } else{
    this.search_Data_Available = true
    this.getSalesData()
    this.paginate()
  }     
}

//pagination_Logic_function:
paginate(){  
  let startItem = (this.currentPage-1) * this.limit;
  let endItem = this.currentPage * this.limit;
  this.salesItem = this.all_salesItem.slice(startItem,endItem)

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
    this.salesItem = this.all_salesItem.sort((a:any,b:any)=>{
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

