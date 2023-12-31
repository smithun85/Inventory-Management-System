import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ManageProductApi } from '../../services/manage-product.service';

@Component({
  selector: 'app-dialog-units',
  templateUrl: './dialog-units.component.html',
})
export class DialogUnitsComponent {

  productManage_Form:FormGroup | any
  public salesItem:any[]=[];
  isSubmitted:boolean = false

//this data comes from allsalesComponent through modal
  isAdded?: boolean ;
  isEditted?:boolean ;
  title?: string; 
  invoice?:string;
  productManage_FormAdd?:FormGroup;
  formData?:any;
  id?:any;
  formModal?:boolean;
  deleteModal?:boolean;
  
  
  
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
    this.manageProductApi.postUnitsData(this.productManage_Form.value).subscribe()
  }
  else if(this.isEditted){
    this.manageProductApi.updateUnitsData(this.productManage_Form.value,this.id).subscribe()
  };
this.bsModalRef.hide();
this.productManage_Form.reset()
};

deleteManageProduct(){
  this.manageProductApi.deleteUnitsData(this.id).subscribe();
  this.bsModalRef.hide()
}

}
