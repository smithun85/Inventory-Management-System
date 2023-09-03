import { Component , OnInit} from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PurchaseApi } from '../../services/purchase.service'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogsComponent } from '../dialogs/dialogs.component';
import {ExportAsService,ExportAsConfig, SupportedExtensions} from 'ngx-export-as';
@Component({
  selector: 'app-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.scss']
})
export class AllPurchasesComponent {

  purchaseAllForm:FormGroup = new FormGroup({
    invoice: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    date: new FormControl('',[Validators.required]),
    supplier: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    warehouse: new FormControl('', Validators.required),
    totalAmount: new FormControl('', Validators.required),
    discount:new FormControl('',Validators.required),
    payable: new FormControl('', Validators.required),
    paid: new FormControl('', Validators.required),
    due:new FormControl('',Validators.required)
  });
  bsModalRef?: BsModalRef;
  isAdded: boolean = false;
  isEditted: boolean = false;
  public purchaseListItem:any[]=[];
  all_purchaseListItem:any[]=[];

  // pdf
  // exportAsConfig: ExportAsConfig = {
  //   type: 'xlsx', // the type you want to download
  //   elementIdOrContent: 'sampleTable', // the id of html/table element
  // };

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
  private PurchaseApi:PurchaseApi,
  private modalService: BsModalService,
  private exportAsService: ExportAsService
) 
{}

ngOnInit(): void {  
  this.purchaseListItem = this.purchaseListItem.slice(0,this.limit) 
  this.getpurchaseListData()
  this.paginate()     
};

//Add Sales Data
openDialogForm(){
  this.isAdded = true
  this.isEditted = false
  const initialState:ModalOptions = {
    initialState:{
      title:'Add Purchase Data',
      isAdded:true,
    isEditted:false,
    purchaseAllFormAdd:this.purchaseAllForm
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.onHide?.subscribe(()=>{
    this.getpurchaseListData();
  })
};

//update-modal
openDialogFormUpdate(id:any){
console.log(id);
this.purchaseListItem.map( item=>{
if(item.id === id){
  this.purchaseAllForm = new FormGroup({
    invoice:new FormControl(item.invoice,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    date:new FormControl(item.date, Validators.required),
    supplier:new FormControl(item.supplier, Validators.required),
    mobile:new FormControl(item.mobile, Validators.required),
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
      title:'Update Purchase Data',
      isAdded:false,
      isEditted:true,
      purchaseAllFormAdd:this.purchaseAllForm,
      id:id,
      // formData:formData,
      
    }
  };
  this.bsModalRef = this.modalService.show(DialogsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.onHide?.subscribe(()=>{
    this.getpurchaseListData();
  })
}
});
}

// download Doc
exportAsConfig: ExportAsConfig = {
  type: 'xlsx', // the type you want to download
  elementIdOrContent: 'sampleTable', // the id of html/table element
};
// Save pdf: private exportAsService: ExportAsService import {ExportAsService,ExportAsConfig, SupportedExtensions} from 'ngx-export-as';
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
  getpurchaseListData(){
    this.PurchaseApi.getAllPurchaseList().subscribe( (item:any)=>{
      console.log(item.purchaseListList)
      this.purchaseListItem = item;
      this. all_purchaseListItem = item;
      this.count = Object.keys(item).length;
      this.paginate();
    })
  };


// Search Text
search(text:string){ 
  if(this.searchText !== ''){  
          
    const searched_users = this.all_purchaseListItem.filter(
      data =>{
        return data.customer.toLowerCase().match(this.searchText.toLowerCase())
      }
    ) 
    //paginate with all searched data:
    let startItem = (this.currentPage-1) * this.limit;
    let endItem = this.currentPage * this.limit;
    this.purchaseListItem = searched_users.slice(startItem,endItem)

    this.search_Data_Available = this.purchaseListItem.length > 0;         
  } else{
    this.search_Data_Available = true
    this.getpurchaseListData()
    this.paginate()
  }     
}

//pagination_Logic_function:
paginate(){  
  let startItem = (this.currentPage-1) * this.limit;
  let endItem = this.currentPage * this.limit;
  this.purchaseListItem = this.all_purchaseListItem.slice(startItem,endItem)

  // console.log(startItem,endItem);
  // console.log("returnedLimitedItems", this.workData);

};

//Pagination_Event
changePage(event:PageChangedEvent ){
  console.log(event)
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
    this.purchaseListItem = this.all_purchaseListItem.sort((a:any,b:any)=>{
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
