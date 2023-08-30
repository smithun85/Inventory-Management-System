import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ManageProductApi } from '../../services/manage-product.service';
import { UNITS } from '../../models/manage-product.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogUnitsComponent } from './dialog-units.component';
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
) 
{}

ngOnInit(): void {  
  this.unitsItem = this.unitsItem.slice(0,this.limit) 
  this.getUnitsData()
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
    productManage_FormAdd:this.productManage_Form
    }
  };
  this.bsModalRef = this.modalService.show(DialogUnitsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
};

//update-modal
openDialogFormUpdate(id:any){
console.log(id);
this.unitsItem.map( item=>{
if(item.id === id){
  this.productManage_Form = new FormGroup({
    serialNo:new FormControl(item.serialNo),
    name:new FormControl(item.name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),    
    products:new FormControl(item.products),   
  });
  let id = item.id
  
  const initialState:ModalOptions = {
    initialState:{
      title:'Update Sales Data',
      isAdded:false,
      isEditted:true,
      productManage_FormAdd:this.productManage_Form,
      id:id,
      // formData:formData,
      
    }
  };
  this.bsModalRef = this.modalService.show(DialogUnitsComponent, initialState);
  this.getUnitsData();
  this.bsModalRef.content.closeBtnName = 'Close'; 
}
});


}
  //get All user_Data:
  getUnitsData(){
    this.ManageProductApi.getUnits().subscribe( (unitsList:UNITS[])=>{
      console.log(unitsList)
      this.unitsItem = unitsList;
      this. all_unitsItem = unitsList;
      this.count = unitsList.length;
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