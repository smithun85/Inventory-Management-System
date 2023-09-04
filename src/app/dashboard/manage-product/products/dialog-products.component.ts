import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ManageProductApi } from '../../services/manage-product.service';

@Component({
  selector: 'app-dialog-products',
  templateUrl: './dialog-products.component.html',

})
export class DialogProductsComponent {

  productManage_Form:FormGroup | any
  public salesItem:any[]=[];
  isSubmitted:boolean = false

//this data comes from allsalesComponent through modal
  isAdded?: boolean ;
  isEditted?:boolean ;
  title?: string; 
  invoice?:string;
  productManage_FormAdd:FormGroup | any;
  formData?:any;
  id?:any;
  
  
  
  userData:any[]=[];
  all_userData:any[]=[];

  constructor(
    public bsModalRef: BsModalRef,
    private manageProductApi:ManageProductApi,
  ){}
 

  ngOnInit(): void {
   
      this.productManage_Form = this.productManage_FormAdd 
  };

  

  onFileChange(event: any) {
    console.log(event.target.files);
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      // this.productManage_FormAdd.controls['image'].setValue(file);
      // console.log(this.productManage_FormAdd.controls['image'].setValue(file));
    }
  }

//reset Form:
resetForm(){
  this.productManage_Form.reset()
}

//Post and update userForm_Data
onSubmit(){  
  console.log(this.isAdded,this.isEditted);
  console.log("Product_Form value",this.productManage_Form.value);
   if (this.productManage_Form.invalid) {
    this.productManage_Form.markAllAsTouched();
    return;
  }

  if(this.isAdded){
    this.manageProductApi.postProductsData(this.productManage_Form.value).subscribe();
  }
  else if(this.isEditted){
    this.manageProductApi.updateProductsData(this.productManage_Form.value,this.id).subscribe();  
  };
this.bsModalRef.hide(); 
this.productManage_Form.reset()
};

}
