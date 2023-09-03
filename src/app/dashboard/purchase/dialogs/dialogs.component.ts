import { Component , OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PurchaseApi } from '../../services/purchase.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit{
 
 
  purchaseAllForm:FormGroup | any
  public purchaseItem:any[]=[];
  isSubmitted:boolean = false

//this data comes from allpurchaseComponent through modal
  isAdded?: boolean ;
  isEditted?:boolean ;
  title?: string; 
  invoice?:string;
  purchaseAllFormAdd?:FormGroup;
  formData?:any;
  id?:any;
  
  
  
  userData:any[]=[];
  all_userData:any[]=[];

  constructor(
    public bsModalRef: BsModalRef,
    private purchaseApi:PurchaseApi,
  ){}
 

  ngOnInit(): void {
    this.purchaseAllForm = this.purchaseAllFormAdd 
  }


//reset Form:
resetForm(){
  this.purchaseAllForm.reset()
}

//Post and update userForm_Data
onSubmit(){  
  console.log(this.isAdded,this.isEditted);
  console.log("Form_value",this.purchaseAllForm.value);
   if (this.purchaseAllForm.invalid) {
    this.purchaseAllForm.markAllAsTouched();
    return;
  }

  if(this.isAdded){
    this.purchaseApi.postpurchaseListData(this.purchaseAllForm.value).subscribe()
  }
  else if(this.isEditted){
    this.purchaseApi.updatepurchaseListsData(this.purchaseAllForm.value,this.id).subscribe()
  };
   
  this.purchaseAllForm.reset();
  this.bsModalRef.hide();
  // console.log("UsersData:",this.userData);    
}

}
