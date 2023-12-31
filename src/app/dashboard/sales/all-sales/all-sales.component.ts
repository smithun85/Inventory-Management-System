
import { Component,OnInit, ElementRef, ViewChild } from '@angular/core';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { salesApi } from '../../services/dashboard-sales.service';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-all-sales',
  templateUrl: './all-sales.component.html',
  styleUrls: ['./all-sales.component.scss']
})
export class AllSalesComponent implements OnInit {

  // @ViewChild('pdfInput') pdfInput: ElementRef<HTMLInputElement> | any;
  // pdf
  pdfFile:any;
  // pdfSrc:any;
  pdfBufferRender:any;
  // pdfSrc:string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  // Set PDF viewer options
  pdfjs = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  salesAllForm:FormGroup = new FormGroup({
    invoice: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    customer: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    warehouse: new FormControl('', Validators.required),
    totalAmount: new FormControl('', Validators.required),
    discount:new FormControl('',Validators.requiredTrue),
    receivable: new FormControl('', Validators.required),
    received: new FormControl('', Validators.required),
    due:new FormControl('',Validators.requiredTrue)
  });
  bsModalRef?: BsModalRef;
  isAdded: boolean = false;
  isEditted: boolean = false;

  public salesItem:any[]=[];
  all_salesItem:any[]=[]

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
  private salesApi:salesApi,
  private modalService: BsModalService,
) 
{ }

ngOnInit(): void {  
  this.getSalesData();
  this.salesItem = this.salesItem.slice(0,this.limit) ; 
  this.paginate() ;    
};

//Add Sales Data
openDialogForm(){
  this.isAdded = true
  this.isEditted = false
  const initialState:ModalOptions = {
    initialState:{
      title:'Add Sales Data',
      isAdded:true,
    isEditted:false,
    isForm:true,
    salesAllFormAdd:this.salesAllForm
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
};


openDialogExcel(){
  const initialState:ModalOptions = {
    initialState:{
      title:'Excel',
      isExcel:true,
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';

}
// Show pdf: 
showPdf = false;
  pdfSrc:string = '';
  onPDFSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.pdfSrc = URL.createObjectURL(file);
      this.showPdf = true;
  }
};

//update-modal
openDialogFormUpdate(id:any){
console.log(id);
this.salesItem.map( item=>{
if(item.id === id){
  this.salesAllForm = new FormGroup({
    invoice:new FormControl(item.invoice,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    date:new FormControl(item.date, Validators.required),
    customer:new FormControl(item.customer, Validators.required),
    mobile:new FormControl(item.mobile, Validators.required),
    warehouse:new FormControl(item.warehouse, Validators.required),
    totalAmount:new FormControl(item.totalAmount, Validators.required),
    discount:new FormControl(item.discount, Validators.required),
    receivable:new FormControl(item.receivable, Validators.required),
    received:new FormControl(item.received, Validators.required),
    due:new FormControl(item.due, Validators.required),
  });
  let id = item.id
  
  const initialState:ModalOptions = {
    initialState:{
      title:'Update Sales Data',
      isAdded:false,
      isEditted:true,
      isForm:true,
      salesAllFormAdd:this.salesAllForm,
      id:id,
      getMethod:this.getSalesData()
      // formData:formData,
      
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
  this.getSalesData();

  this.bsModalRef.content.closeBtnName = 'Close';
  
}
});


}

  //get All user_Data:
  getSalesData(){
    this.salesApi.getAllSales().subscribe( (item:any)=>{
      console.log(item.salesList)
      this.salesItem = item.salesList;
      this. all_salesItem = item.salesList;
      this.count = item.salesList.length;
    });
    
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
