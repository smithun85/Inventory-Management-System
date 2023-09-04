import { Component } from '@angular/core';
import {  FormGroup } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { ManageProductApi } from '../../services/manage-product.service';

@Component({
  selector: 'app-dialog-brands',
  templateUrl: './dialog-brands.component.html',

})
export class DialogBrandsComponent {

  productManage_Form:FormGroup | any
  public salesItem:any[]=[];
  isSubmitted:boolean = false;

//this data comes from allsalesComponent through modal
  isAdded?: boolean ;
  isEditted?:boolean ;
  title?: string; 
  invoice?:string;
  productManage_FormAdd?:FormGroup;
  formData?:any;
  id?:any;
  formModal?:boolean;
  deleteModal?:boolean
  
  
  
  userData:any[]=[];
  all_userData:any[]=[];

  constructor(
    public bsModalRef: BsModalRef,
    private manageProductApi:ManageProductApi,
  ){}
 

  ngOnInit(): void {
   
    if(this.formModal){
      this.productManage_Form = this.productManage_FormAdd
     }
    
  }

//reset Form:
resetForm(){
  this.productManage_Form.reset()
}

//Post and update userForm_Data
onSubmit(){  
  console.log(this.isAdded,this.isEditted);
  console.log("Form_value",this.productManage_Form.value);
   if (this.productManage_Form.invalid) {
    this.productManage_Form.markAllAsTouched();
    return;
  }

  if(this.isAdded){
    this.manageProductApi.postBrandsData(this.productManage_Form.value).subscribe()
  }
  else if(this.isEditted){
    this.manageProductApi.updateBrandsData(this.productManage_Form.value,this.id).subscribe()
  };
   
  this.bsModalRef.hide();
  this.productManage_Form.reset();
  // console.log("UsersData:",this.userData);    
};

deleteManageProduct(){
  this.manageProductApi.deleteBrandsData(this.id).subscribe();
  this.bsModalRef.hide()
}

}
