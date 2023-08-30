import { Component , OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { salesApi } from '../../../services/dashboard-sales.service';
import { ManageProductApi } from '../../../services/manage-product.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit{
 
 
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
      
      // console.log(this.formData);
    
  }

//reset Form:
resetForm(){
  this.productManage_Form.reset()
}

//Post and update userForm_Data
onSubmit(){  
  console.log(this.isAdded,this.isEditted);
  console.log("Form_value",this.productManage_Form.value);
  //  if (this.productManage_Form.invalid) {
  //   this.productManage_Form.markAllAsTouched();
  //   return;
  // }

  if(this.isAdded){
    this.manageProductApi.postCategoriesData(this.productManage_Form.value).subscribe()
  }
  else if(this.isEditted){
    this.manageProductApi.updateCategoriesData(this.productManage_Form.value,this.id).subscribe()
  };
   
this.bsModalRef.hide()
  // console.log("UsersData:",this.userData);    
};

deleteManageProduct(){
  this.manageProductApi.deleteCategoriesData(this.id).subscribe();
  this.bsModalRef.hide()
}

}
