import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PurchaseApi } from '../../services/purchase.service';

@Component({
  selector: 'app-dialog-purchase-return',
  templateUrl: './dialog-purchase-return.component.html',
})
export class DialogPurchaseReturnComponent {
  purchaseAllForm:FormGroup | any
  public purchaseItem:any[]=[];
  isSubmitted:boolean = false

//this data comes from allpurchaseComponent through modal
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
  console.log("Form_value",this.purchaseAllForm.value);
  //  if (this.purchaseAllForm.invalid) {
  //   this.purchaseAllForm.markAllAsTouched();
  //   return;
  // }
    this.purchaseApi.updatepurchaseListReturnData(this.purchaseAllForm.value,this.id).subscribe()   
  this.purchaseAllForm.reset()
  // console.log("UsersData:",this.userData);    
}

}
