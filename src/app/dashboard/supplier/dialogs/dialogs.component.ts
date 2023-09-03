
import { Component , OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { salesApi } from '../../services/dashboard-sales.service';
import { CustomerApi } from '../../services/customer.service';
import { SupplierApi } from '../../services/supplier.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit{
 
 
  supplierForm:FormGroup | any
  public salesItem:any[]=[];
  isSubmitted:boolean = false

//this data comes from allsalesComponent through modal
  isAdded?: boolean ;
  isEditted?:boolean ;
  title?: string; 
  invoice?:string;
  supplierFormAdd?:FormGroup;
  formData?:any;
  id?:any;
  
  
  
  userData:any[]=[];
  all_userData:any[]=[];

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private supplierApi:SupplierApi,
  ){}
 

  ngOnInit(): void {   
      this.supplierForm = this.supplierFormAdd      
      // console.log(this.formData); 
  }

//reset Form:
resetForm(){
  this.supplierForm.reset()
}

//Post and update userForm_Data
onSubmit(){  
  console.log(this.isAdded,this.isEditted);
  console.log("Form_value",this.supplierForm.value);
   if (this.supplierForm.invalid) {
    this.supplierForm.markAllAsTouched();
    return;
  }

  if(this.isAdded){
    this.supplierApi.postsupplierData(this.supplierForm.value).subscribe()
  }
  else if(this.isEditted){
    this.supplierApi.updatesuppliersData(this.supplierForm.value,this.id).subscribe()
  };
   
this.bsModalRef.hide();
this.supplierForm.reset();
}

}
