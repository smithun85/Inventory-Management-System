import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ManageProductApi } from '../../services/manage-product.service';
import { PRODUCTS } from '../../models/manage-product.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogProductsComponent } from './dialog-products.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productManage_Form:FormGroup = new FormGroup({
    image: new FormControl('',[Validators.required]),
    products: new FormControl('', Validators.required),
    name: new FormControl('',[Validators.required]),
    SKU: new FormControl('', Validators.required),
    serialNo: new FormControl('',[Validators.required]),
    category: new FormControl('', Validators.required),
    brand: new FormControl('',[Validators.required]),
    stock: new FormControl('', Validators.required),
    total_sale: new FormControl('',[Validators.required]),
    altert_qnty: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required),
  });
  bsModalRef?: BsModalRef;
  isAdded: boolean = false;
  isEditted: boolean = false;

  public productsItem:PRODUCTS[]=[];
  all_productsItem:PRODUCTS[]=[];

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
  this.productsItem = this.productsItem.slice(0,this.limit) 
  this.getProductsData()
  this.paginate()     
};

//Add Category Data
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
  this.bsModalRef = this.modalService.show(DialogProductsComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
};

//update-modal
openDialogFormUpdate(id:any){
console.log(id);
this.productsItem.map( item=>{
if(item.id === id){
  this.productManage_Form = new FormGroup({
    image:new FormControl(''),
    name:new FormControl(item.name),
    SKU:new FormControl(item.SKU),
    category:new FormControl(item.category),
    brand:new FormControl(item.brand),
    stock:new FormControl(item.stock),
    total_sale:new FormControl(item.total_sale),
    altert_qnty:new FormControl(item.altert_qnty),  
    unit:new FormControl(item.unit), 
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
  this.bsModalRef = this.modalService.show(DialogProductsComponent, initialState);
  this.getProductsData();
  this.bsModalRef.content.closeBtnName = 'Close'; 
}
});


}
  //get All user_Data:
  getProductsData(){
    this.ManageProductApi.getProducts().subscribe( (productsList:PRODUCTS[])=>{
      console.log(productsList)
      this.productsItem = productsList;
      this. all_productsItem = productsList;
      this.count = productsList.length;
    })
  };


// Search Text
search(text:string){ 
  if(this.searchText !== ''){  
          
    const searched_users = this.all_productsItem.filter(
      data =>{
        return data.name.toLowerCase().match(this.searchText.toLowerCase())
      }
    ) 
    //paginate with all searched data:
    let startItem = (this.currentPage-1) * this.limit;
    let endItem = this.currentPage * this.limit;
    this.productsItem = searched_users.slice(startItem,endItem)

    this.search_Data_Available = this.productsItem.length > 0;         
  } else{
    this.search_Data_Available = true
    this.getProductsData()
    this.paginate()
  }     
}

//pagination_Logic_function:
paginate(){  
  let startItem = (this.currentPage-1) * this.limit;
  let endItem = this.currentPage * this.limit;
  this.productsItem = this.all_productsItem.slice(startItem,endItem)

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
    this.productsItem = this.all_productsItem.sort((a:any,b:any)=>{
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