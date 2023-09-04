import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() {}

// ===============Validate Image========= ========
  validateImage(control: AbstractControl): ValidationErrors | any {
  const file = control.value;
  console.log(file)
  if (!file) {
    return null;
  };

    let ext = file.substring(file.lastIndexOf('.') + 1);
    console.log(ext)
  const allowedTypes = ['jpeg', 'png', 'gif', 'jpg'];
  if (!allowedTypes.includes(ext)) {
    return {invalidFileType:true};
  };

//   const maxWidth = 1000;
//   const maxHeight = 1000;
//   const image = new Image();
//   image.src = window.URL.createObjectURL(file);
//   return new Promise(resolve => {
//     image.onload = () => {
//       if (image.width > maxWidth || image.height > maxHeight) {
//         resolve({invalidDimensions:true});
//       } else {
//         resolve(null);
//       }
//     };
//   });
};

// fileSizeValidator(maxSize: number) {
//   return (control: any) => {
//     if (control.value && control.value.length > 0) {
//       const file = control.value[0]; // Assuming it's a single file input
//       const fileSize = file.size / 1024; // Convert to KB
//       console.log(control.value, control.value.length)
//       console.log(file, fileSize)

//       if (fileSize > maxSize) {
//         return {invalidFileSize:true};
//       }
//     }

//     return null;
//   };
// }
fileSizeValidator(event:any) {
  return (control: any) => {

    const file = event.target.files[0];
    
// if (file) {
//   const maxSize = 1024 * 1024; // 1 MB (adjust as needed)

//   if (file.size > maxSize) {
//     this.imageForm.get('image').setErrors({ maxSizeExceeded: true });
//     this.fileInput.nativeElement.value = ''; // Clear the file input
//   } else {
//     this.imageForm.get('image').setErrors(null);
//   }
// }

    // if (control.value && control.value.length > 0) {
    //   const file = control.value[0]; // Assuming it's a single file input
    //   const fileSize = file.size / 1024; // Convert to KB
    //   console.log(control.value, control.value.length)
    //   console.log(file, fileSize)

    //   if (fileSize > maxSize) {
    //     return {invalidFileSize:true};
    //   }
    // }

    return null;
  };
}


}



