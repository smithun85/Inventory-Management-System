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


  // const maxSize = 1048; // 1MB in bytes
  // console.log(file.size)
  // if (file.size > maxSize) {
  //   return {invalidFileSize:true};
  // };

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
}

}



