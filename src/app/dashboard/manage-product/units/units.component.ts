import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ManageProductApi } from '../../services/manage-product.service';
import { UNITS } from '../../Models/manage-product.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogUnitsComponent } from './dialog-units.component';
import {ExportAsService,ExportAsConfig, SupportedExtensions} from 'ngx-export-as';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {

  productManage_Form:FormGroup = new FormGroup({
    serialNo: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    products: new FormControl('', Validators.required),
   
  });
  bsModalRef?: BsModalRef;
  isAdded: boolean = false;
  isEditted: boolean = false;
  formModal:boolean = false;
  // formModal:boolean = false;

  public unitsItem:UNITS[]=[];
  all_unitsItem:UNITS[]=[];

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
  private ManageProductApi:ManageProductApi,
  private modalService: BsModalService,
  private exportAsService: ExportAsService,
) 
{}

ngOnInit(): void {  
  this.unitsItem = this.unitsItem.slice(0,this.limit) 
  this.getUnitsData()
  this.paginate()     
};

//Add Sales Data
openDialogForm(){
  const initialState:ModalOptions = {
    initialState:{
      title:'Add new Unit',
      isAdded:true,
    isEditted:false,
    formModal:true,
    productManage_FormAdd:this.productManage_Form
    }
  };
  this.bsModalRef = this.modalService.show(DialogUnitsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.onHide?.subscribe(()=>{
    this.getUnitsData();
  })
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
this.unitsItem.map( item=>{
if(item.id === id){
  this.productManage_Form = new FormGroup({
    serialNo:new FormControl(item.serialNo, Validators.required),
    name:new FormControl(item.name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),    
    products:new FormControl(item.products, Validators.required),   
  });
  let id = item.id
  
  const initialState:ModalOptions = {
    initialState:{
      title:'Update Unit Data',
      isAdded:false,
      isEditted:true,
      formModal:true,
      productManage_FormAdd:this.productManage_Form,
      id:id,
      // formData:formData,
      
    }
  };
  this.bsModalRef = this.modalService.show(DialogUnitsComponent, initialState);

  this.bsModalRef.content.closeBtnName = 'Close'; 
  this.bsModalRef.onHide?.subscribe(()=>{
    this.getUnitsData();
  })

}
});
};

//Delete:
openDeleteDialog(id:any){
  console.log(id);
  this.unitsItem.map( item=>{
    if(item.id === id){
      let id = item.id;
     
  
      const initialState:ModalOptions = {
        initialState:{
          title:'Are you sure ? Do you want to delete this details',
          id:id,    
          deleteModal:true,     
        }
      };
      this.bsModalRef = this.modalService.show(DialogUnitsComponent, initialState);    
      this.bsModalRef.content.closeBtnName = 'Close'; 
      this.bsModalRef.onHide?.subscribe(()=>{
        this.getUnitsData();
      })
  }
  });
};
  //get All user_Data:
  getUnitsData(){
    this.ManageProductApi.getUnits().subscribe( (unitsList:UNITS[])=>{
      console.log(unitsList)
      this.unitsItem = unitsList;
      this. all_unitsItem = unitsList;
      this.count = Object.keys(unitsList).length;
      this.paginate();
      // this.sortClick(this.sortType)
    })
  };


// Search Text
search(text:string){ 
  if(this.searchText !== ''){  
          
    const searched_users = this.all_unitsItem.filter(
      data =>{
        return data.name.toLowerCase().match(this.searchText.toLowerCase())
      }
    ) 
    //paginate with all searched data:
    let startItem = (this.currentPage-1) * this.limit;
    let endItem = this.currentPage * this.limit;
    this.unitsItem = searched_users.slice(startItem,endItem)

    this.search_Data_Available = this.unitsItem.length > 0;         
  } else{
    this.search_Data_Available = true
    this.getUnitsData()
    this.paginate()
  }     
}

//pagination_Logic_function:
paginate(){  
  let startItem = (this.currentPage-1) * this.limit;
  let endItem = this.currentPage * this.limit;
  this.unitsItem = this.all_unitsItem.slice(startItem,endItem)

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
    this.unitsItem = this.all_unitsItem.sort((a:any,b:any)=>{
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