import { Component , OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { salesApi } from '../../services/sales.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit{
 
 
  salesAllForm:FormGroup | any
  public salesItem:any[]=[];
  isSubmitted:boolean = false

//this data comes from allsalesComponent through modal
  isAdded?: boolean ;
  isEditted?:boolean ;
  title?: string; 
  invoice?:string;
  salesAllFormAdd?:FormGroup;
  formData?:any;
  id?:any;
  
  
  
  userData:any[]=[];
  all_userData:any[]=[];

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private salesApi:salesApi,
  ){}
 

  ngOnInit(): void {
   
      this.salesAllForm = this.salesAllFormAdd
      
      // console.log(this.formData);
    
  }
  //=====Getter method============
get usersControls(){
  return this.salesAllForm.controls;
};

//reset Form:
resetForm(){
  this.salesAllForm.reset()
}

//Post and update userForm_Data
onSubmit(){  
  console.log(this.isAdded,this.isEditted);
  console.log("Form_value",this.salesAllForm.value);
  //  if (this.salesAllForm.invalid) {
  //   this.salesAllForm.markAllAsTouched();
  //   return;
  // }

  if(this.isAdded){
    this.salesApi.postSalesData(this.salesAllForm.value).subscribe()
  }
  else if(this.isEditted){
    this.salesApi.updateSalessData(this.salesAllForm.value,this.id).subscribe()
  };
   
  this.salesAllForm.reset()
  // console.log("UsersData:",this.userData);    
}

}
