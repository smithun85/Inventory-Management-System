import { Component , OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {
  usersForm:FormGroup;
  public salesItem:any[]=[];

  modalRef?: BsModalRef;
  isAdded: boolean = false;
  isEditted: boolean = false;
  deleteUser_id:number = 0
  
  
  userData:any[]=[];
  all_userData:any[]=[]
  user_id:number = 0
  constructor(  private router: Router,
    private modalService: BsModalService,){
    this.usersForm = new FormGroup({
      id : new FormControl(''),
      name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      address: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      gender: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      checkedOut:new FormControl(false,Validators.requiredTrue)
    });
  };

  //=====Getter method============
get usersControls(){
  return this.usersForm.controls;
};

//update-modal
openFormUpdateModal(edit: TemplateRef<any>, id:number) {
  this.user_id = id
  this.isAdded = false
  this.isEditted = true
  this.modalRef = this.modalService.show(edit);
  // console.log(this.userData);
  this.userData.map( (user:any)=>{
     if(user.id== id){
      this.usersForm.patchValue({
        id: user.id,
        name:user.name,
        address:user.address,
        email:user.email,
        mobile:user.mobile,
        gender:user.gender,
        city:user.city,
        condition:user.condition
      })
     }     
  })
};

//signUp-modal
openFormSignupModal(add: TemplateRef<any>) {
  this.isEditted = false
  this.isAdded = true
  this.resetForm()
  this.modalRef = this.modalService.show(add);  
}



//Delete-modal:
openDeleteModal(delete_Modal: TemplateRef<any>, id:number) {
  this.deleteUser_id = id
  this.modalRef = this.modalService.show(delete_Modal);  
}

//reset Form:
resetForm(){
  this.usersForm.reset()
}

//Post and update userForm_Data
onSubmit(){  
  // console.log("Form_value",this.usersForm.value);
   if (this.usersForm.invalid) {
    this.usersForm.markAllAsTouched();
    return;
  }
  // if(this.isAdded){
  //   this.userService.postUsersData(this.usersForm.value).subscribe()
  // }
  // else if(this.isEditted){
  //   this.userService.updateUsersData(this.usersForm.value,this.user_id).subscribe()
  // }
  this.resetForm()
  // console.log("UsersData:",this.userData);    
}

//Delete user-Data
deleteUser(){
  // this.userService.deleteUsersData(this.deleteUser_id).subscribe()

}
}
