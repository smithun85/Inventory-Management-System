import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() {}

// ===============Validate Image========= ========
  validateImage(control: AbstractControl): ValidationErrors | null {
  const file = control.value as File;
  if (!file) {
    return null;
  }
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
  if (!allowedTypes.includes(file.type)) {
    return {invalidFileType:true};
  }
  const maxSize = 1048576; // 1MB in bytes
  if (file.size > maxSize) {
    return {invalidFileSize:true};
  }
  const maxWidth = 1000;
  const maxHeight = 1000;
  const image = new Image();
  image.src = URL.createObjectURL(file);
  return new Promise(resolve => {
    image.onload = () => {
      if (image.width > maxWidth || image.height > maxHeight) {
        resolve({invalidDimensions:true});
      } else {
        resolve(null);
      }
    };
  });
}

}



