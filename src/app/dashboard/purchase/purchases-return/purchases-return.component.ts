import { Component , OnInit} from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PurchaseApi } from '../../services/purchase.service'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogPurchaseReturnComponent } from './dialog-purchase-return.component';
import {ExportAsService,ExportAsConfig, SupportedExtensions} from 'ngx-export-as';
@Component({
  selector: 'app-purchases-return',
  templateUrl: './purchases-return.component.html',
  styleUrls: ['./purchases-return.component.scss']
})
export class PurchasesReturnComponent {

  purchaseAllForm:FormGroup | any;
  bsModalRef?: BsModalRef;
  public purchaseReturnItem:any[]=[];
  all_purchaseReturnItem:any[]=[];

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

// pdf
exportAsConfig: ExportAsConfig = {
  type: 'xlsx', // the type you want to download
  elementIdOrContent: 'sampleTable', // the id of html/table element
};

constructor(
  private exportAsService: ExportAsService,
  private purchaseApi:PurchaseApi,
  private modalService: BsModalService,
) 
{}

ngOnInit(): void {  

  this.purchaseReturnItem = this.purchaseReturnItem.slice(0,this.limit) 
  this.getpurchaseReturnData()
  this.paginate()     
};

//update-modal
openDialogFormUpdate(id:any){
  console.log(id);
  this.purchaseReturnItem.map( item=>{
  if(item.id === id){
    this.purchaseAllForm = new FormGroup({
      invoice:new FormControl(item.invoice,[Validators.required]),
      date:new FormControl(item.date,Validators.required),
      supplier:new FormControl(item.supplier,Validators.required),
      mobile:new FormControl(item.mobile,Validators.required),
      warehouse:new FormControl(item.warehouse,Validators.required),
      totalAmount:new FormControl(item.totalAmount,Validators.required),
      lessed:new FormControl(item.lessed,Validators.required),
      receivable:new FormControl(item.receivable,Validators.required),
      received:new FormControl(item.received,Validators.required),
      due:new FormControl(item.due,Validators.required),
    });
    let id = item.id
    
    const initialState:ModalOptions = {
      initialState:{
        title:'Update Purchase return Data',
        purchaseAllFormAdd:this.purchaseAllForm,
        id:id,
      }
    };
    this.bsModalRef = this.modalService.show(DialogPurchaseReturnComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.onHide?.subscribe(()=>{
      this.getpurchaseReturnData();
    })
    
  }
  });
  }

  // Save pdf 
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

  //get All user_Data:
  getpurchaseReturnData(){
    this.purchaseApi.getpurchaseListReturn().subscribe( (item:any)=>{
      console.log(item)
      this.purchaseReturnItem = item;
      this. all_purchaseReturnItem = item;
      this.count = Object.keys(item).length;
      this.paginate();
    })
  };


// Search Text
search(text:string){ 
  if(this.searchText !== ''){           
    const searched_users = this.all_purchaseReturnItem.filter(
      data =>{
        return data.customer.toLowerCase().match(this.searchText.toLowerCase())
      }
    ) 
    //paginate with all searched data:
    let startItem = (this.currentPage-1) * this.limit;
    let endItem = this.currentPage * this.limit;
    this.purchaseReturnItem = searched_users.slice(startItem,endItem)

    this.search_Data_Available = this.purchaseReturnItem.length > 0;         
  } else{
    this.search_Data_Available = true
    this.getpurchaseReturnData()
    this.paginate()
  }     
}

//pagination_Logic_function:
paginate(){  
  let startItem = (this.currentPage-1) * this.limit;
  let endItem = this.currentPage * this.limit;
  this.purchaseReturnItem = this.all_purchaseReturnItem.slice(startItem,endItem)

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
    this.purchaseReturnItem = this.all_purchaseReturnItem.sort((a:any,b:any)=>{
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

