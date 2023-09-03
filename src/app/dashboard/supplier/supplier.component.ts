import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { SUPPLIER } from '../Models/supplier.model';
import { SupplierApi } from '../services/supplier.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogsComponent } from './dialogs/dialogs.component';
import {ExportAsService,ExportAsConfig, SupportedExtensions} from 'ngx-export-as';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent {

  salesAllForm:FormGroup = new FormGroup({
    serialNo: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('', Validators.required),
    receivable: new FormControl('', Validators.required),
    payable: new FormControl('', Validators.required),
   
  });
  bsModalRef?: BsModalRef;
  isAdded: boolean = false;
  isEditted: boolean = false;


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
  private supplierApi:SupplierApi,
  private modalService: BsModalService,
  private exportAsService: ExportAsService, 
) 
{}

ngOnInit(): void {  
  this.supplierItem = this.supplierItem.slice(0,this.limit) 
  this.getSupplierData()
  this.paginate()     
};

//Add Sales Data
openDialogForm(){
  this.isAdded = true
  this.isEditted = false
  const initialState:ModalOptions = {
    initialState:{
      title:'Add Supplier',
      isAdded:true,
    isEditted:false,
    supplierFormAdd:this.salesAllForm
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
 
  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.onHide?.subscribe(()=>{
    this.getSupplierData();
  })
};
// download Doc
exportAsConfig: ExportAsConfig = {
  type: 'xlsx', // the type you want to download
  elementIdOrContent: 'sampleTable', // the id of html/table element
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
this.supplierItem.map( item=>{
if(item.id === id){
  this.salesAllForm = new FormGroup({
    serialNo:new FormControl(item.serialNo, Validators.required),
    name:new FormControl(item.name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),    
    mobile:new FormControl(item.mobile, [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl(item.email, Validators.required),
    receivable:new FormControl(item.receivable, Validators.required),
    payable:new FormControl(item.payable, Validators.required),
  });
  let id = item.id
  
  const initialState:ModalOptions = {
    initialState:{
      title:'Update Supplier Data',
      isAdded:false,
      isEditted:true,
      supplierFormAdd:this.salesAllForm,
      id:id,
      // formData:formData,
      
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.onHide?.subscribe(()=>{
    this.getSupplierData();
  })
  
}
});
};


  //get All user_Data:
  getSupplierData(){
    this.supplierApi.getsupplier().subscribe( (item:SUPPLIER[])=>{
      console.log(item)
      this.supplierItem = item;
      this. all_supplierItem = item;
      this.count = Object.keys(item).length;
      this.paginate();
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
    this.getSupplierData()
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
