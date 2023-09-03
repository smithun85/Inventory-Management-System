import { Component , OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { salesApi } from '../../services/dashboard-sales.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit{
 
 
  salesAllForm:FormGroup | any
  public salesItem:any[]=[];
  isSubmitted:boolean = false;
  excelData:any[] = []

//this data comes from allsalesComponent through modal
  isAdded?: boolean ;
  isEditted?:boolean ;
  title?: string; 
  invoice?:string;
  salesAllFormAdd?:FormGroup;
  formData?:any;
  id?:any;
  isForm?:boolean;
  isExcel?:boolean;
  
  
  
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
   if (this.salesAllForm.invalid) {
    this.salesAllForm.markAllAsTouched();
    return;
  }

  if(this.isAdded){
    this.salesApi.postSalesData(this.salesAllForm.value).subscribe()
  }
  else if(this.isEditted){
    this.salesApi.updateSalessData(this.salesAllForm.value,this.id).subscribe()
  };
this.bsModalRef.hide()  
};



// show excel
// csvData:any[]=[] // Store the CSV data here
// onCSVSelected(event: any): void {
//   const target: DataTransfer = <DataTransfer>(event.target);
//   if (target.files.length > 1) {
//     alert('Multiple files are not allowed');
//     return;
//   }
//   else {
//     const reader: FileReader = new FileReader();
//     reader.onload = (e: any) => {
//       const bstr: string = e.target.result;
//       const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
//       console.log('aaa',wb)
//       const wsname = wb.SheetNames[0];
//       console.log('bbb',wsname)
//       const ws: XLSX.WorkSheet = wb.Sheets[wsname];
//       console.log("ws",ws)
//       this.csvData = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
//       // Print the Excel Data
//       console.log(this.csvData);
//     }
//     reader.readAsBinaryString(target.files[0]);
//   }
//     };


    file:File | any;
    arrayBuffer:any 
    fileList:any[]=[];
    header:any[]= [];
    tableData:any[]=[];
    addfile(event:any)  {    
      this.file= event.target.files[0];     
      let fileReader = new FileReader();    
      fileReader.readAsArrayBuffer(this.file);     
      fileReader.onload = (e) => {    
        this.arrayBuffer = fileReader.result;    
        var data = new Uint8Array(this.arrayBuffer);    
        var arr = new Array();    
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
        var bstr = arr.join("");    
        var workbook = XLSX.read(bstr, {type:"binary"});    
        var first_sheet_name = workbook.SheetNames[0];    
        var worksheet = workbook.Sheets[first_sheet_name];    
        console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));   
        this.fileList = XLSX.utils.sheet_to_json(worksheet,{raw:true});                    
        console.log(this.fileList) ;
        
        this.header = Object.keys(this.fileList[0])
      }    
    } 
  }


