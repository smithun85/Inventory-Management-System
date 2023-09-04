import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { CustomerApi } from '../services/customer.service';
import { CUSTOMER } from '../Models/customer.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogsComponent } from './dialogs/dialogs.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  digits =/^[0-9\+\-\ ]*$/;

  salesAllForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    address: new FormControl('',[Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.digits)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.email)]),
    receivable: new FormControl('', [Validators.required, Validators.pattern(this.digits)]),
    payable: new FormControl('', [Validators.required, Validators.pattern(this.digits)]),
   
  });
  bsModalRef?: BsModalRef;
  isAdded: boolean = false;
  isEditted: boolean = false;

  public customerItem:CUSTOMER[]=[];
  all_customerItem:CUSTOMER[]=[];

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
  private customerApi:CustomerApi,
  private modalService: BsModalService,
) 
{}

ngOnInit(): void {  
  this.customerItem = this.customerItem.slice(0,this.limit) 
  this.getcustomerData()
  this.paginate()     
};

//Add Sales Data
openDialogForm(){
  this.isAdded = true
  this.isEditted = false
  const initialState:ModalOptions = {
    initialState:{
      title:'Add Customer',
      isAdded:true,
    isEditted:false,
    salesAllFormAdd:this.salesAllForm
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.onHide?.subscribe(()=>{
    this.getcustomerData();
  })
};

//update-modal
openDialogFormUpdate(id:any){
console.log(id);
this.customerItem.map( item=>{
if(item.id === id){
  this.salesAllForm = new FormGroup({
    name:new FormControl(item.name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    address:new FormControl(item.address,Validators.required),
    mobile:new FormControl(item.mobile,[Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.digits)]),
    email:new FormControl(item.email,[Validators.required, Validators.pattern(this.email)]),
    receivable:new FormControl(item.receivable,[Validators.required, Validators.pattern(this.digits)]),
    payable:new FormControl(item.payable,[Validators.required, Validators.pattern(this.digits)]),
  });
  let id = item.id
  
  const initialState:ModalOptions = {
    initialState:{
      title:'Update Sales Data',
      isAdded:false,
      isEditted:true,
      salesAllFormAdd:this.salesAllForm,
      id:id,
      // formData:formData,
      
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.onHide?.subscribe(()=>{
    this.getcustomerData();
  })
  
}
});


}

  //get All user_Data:
  getcustomerData(){
    this.customerApi.getCustomer().subscribe( (item:CUSTOMER[])=>{
      console.log(item)
      this.customerItem = item;
      this. all_customerItem = item;
      this.count = Object.keys(item).length;
      this.paginate();
    })
  };


// Search Text
search(text:string){ 
  if(this.searchText !== ''){  
          
    const searched_users = this.all_customerItem.filter(
      data =>{
        return data.name.toLowerCase().match(this.searchText.toLowerCase())
      }
    ) 
    //paginate with all searched data:
    let startItem = (this.currentPage-1) * this.limit;
    let endItem = this.currentPage * this.limit;
    this.customerItem = searched_users.slice(startItem,endItem)

    this.search_Data_Available = this.customerItem.length > 0;         
  } else{
    this.search_Data_Available = true
    this.getcustomerData()
    this.paginate()
  }     
}

//pagination_Logic_function:
paginate(){  
  let startItem = (this.currentPage-1) * this.limit;
  let endItem = this.currentPage * this.limit;
  this.customerItem = this.all_customerItem.slice(startItem,endItem)

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
    this.customerItem = this.all_customerItem.sort((a:any,b:any)=>{
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
